import bpy, math, os
from mathutils import Vector, Quaternion
base='/data/data/com.termux/files/home/MainWorkspace/crownlands-mobile'

# reset
bpy.ops.wm.read_factory_settings(use_empty=True)

def mat(name, color, metallic=0.0, rough=0.5):
    m=bpy.data.materials.new(name)
    m.diffuse_color=(*color,1)
    m.metallic=metallic
    m.roughness=rough
    return m

gold=mat('Royal Gold',(0.78,0.48,0.08),0.8,0.22)
velvet=mat('Royal Velvet',(0.34,0.025,0.05),0.05,0.7)
wood=mat('Dark Wood',(0.16,0.055,0.02),0.15,0.55)
stone=mat('Stone',(0.38,0.36,0.33),0.0,0.88)
floor_mat=mat('Floor',(0.12,0.12,0.13),0,0.9)

def add_box(name,scale,loc,material):
    bpy.ops.mesh.primitive_cube_add(location=loc)
    o=bpy.context.object;o.name=name;o.scale=(scale[0]/2,scale[1]/2,scale[2]/2)
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    o.data.materials.append(material)
    return o

def add_crown(parent, z=2.0):
    bpy.ops.mesh.primitive_cylinder_add(vertices=24, radius=.19, depth=.11, location=(0,0,0))
    band=bpy.context.object; band.data.materials.append(gold); band.parent=parent; band.location=(0,0,z)
    for i in range(8):
        a=i/8*math.tau
        bpy.ops.mesh.primitive_cone_add(vertices=5, radius1=.045, radius2=0, depth=.19, location=(0,0,0))
        p=bpy.context.object;p.data.materials.append(gold);p.parent=parent;p.location=(math.cos(a)*.155,math.sin(a)*.155,z+.14)

def build_throne(x):
    parts=[]
    def b(s,l,m):
        return add_box('throne',s,(x+l[0],l[1],l[2]),m)
    b((3,.22,2.15),(0,.11,0),stone)
    b((2.35,.22,1.55),(0,.33,-.08),stone)
    b((1.05,.23,.85),(0,.66,-.03),velvet)
    b((1.15,2,.22),(0,1.57,.33),wood)
    b((1,1.55,.12),(0,1.6,.20),velvet)
    b((.13,.85,.13),(-.64,1.08,0),gold);b((.13,.85,.13),(.64,1.08,0),gold)
    b((.32,.12,.68),(-.64,1.38,-.03),gold);b((.32,.12,.68),(.64,1.38,-.03),gold)
    return

def import_king(x, seated=False):
    before=set(bpy.data.objects)
    bpy.ops.import_scene.gltf(filepath=os.path.join(base,'assets','king-knight.glb'))
    imported=[o for o in bpy.data.objects if o not in before]
    roots=[o for o in imported if o.parent is None]
    root=roots[0] if roots else imported[0]
    # parent all roots under empty for transform
    bpy.ops.object.empty_add(type='PLAIN_AXES',location=(x,0,0))
    carrier=bpy.context.object
    for r in roots:
        r.parent=carrier
    # normalize to the runtime intended tall-adult height (1.86 m)
    xs=[];ys=[];zs=[]
    for o in imported:
        if o.type=='MESH':
            for c in o.bound_box:
                w=o.matrix_world@Vector(c)
                xs.append(w.x);ys.append(w.y);zs.append(w.z)
    h=max(zs)-min(zs)
    sc=1.86/max(h,.01);carrier.scale=(sc,sc,sc)
    bpy.context.view_layer.update()
    # recompute min z and shift
    zs=[]
    for o in imported:
        if o.type=='MESH':
            for c in o.bound_box: zs.append((o.matrix_world@Vector(c)).z)
    carrier.location.z-=min(zs)

    arm=next((o for o in imported if o.type=='ARMATURE'),None)
    if arm:
        # material overrides
        for o in imported:
            if o.type=='MESH':
                for m in o.data.materials:
                    n=m.name.lower()
                    if 'armor' in n:
                        m.diffuse_color=(.035,.06,.12,1);m.metallic=.68;m.roughness=.3
        if seated:
            # same intent as game: thighs forward, knees bent, slight torso lean, arms resting
            def rot(name,axis,ang):
                pb=arm.pose.bones.get(name)
                if pb:
                    pb.rotation_mode='QUATERNION'
                    q=Quaternion(axis,ang)
                    pb.rotation_quaternion=pb.rotation_quaternion @ q
            rot('UpperLeg.L',(1,0,0),-1.30);rot('UpperLeg.R',(1,0,0),-1.30)
            rot('LowerLeg.L',(1,0,0),1.25);rot('LowerLeg.R',(1,0,0),1.25)
            rot('UpperArm.L',(0,0,1),.18);rot('UpperArm.R',(0,0,1),-.18)
            rot('LowerArm.L',(1,0,0),-.38);rot('LowerArm.R',(1,0,0),-.38)
            rot('Torso',(1,0,0),.06)
            # align pelvis to seat; carrier Z is adjusted below from visual bbox
            carrier.location.z=-.18
            carrier.location.y=-.05
    add_crown(carrier,1.84 if not seated else 1.84)
    return carrier

# floor
add_box('Floor',(8,8,.1),(0,0,-.06),floor_mat)

# standing left
k1=import_king(-1.65,False)
# seated right with throne behind him
build_throne(1.7)
k2=import_king(1.7,True)

# labels as text
for txt,x in [('STANDING',-1.65),('SEATED',1.7)]:
    bpy.ops.object.text_add(location=(x,-.9,2.65),rotation=(math.radians(90),0,0))
    t=bpy.context.object;t.data.body=txt;t.data.align_x='CENTER';t.data.size=.22;t.data.extrude=.005;t.data.materials.append(gold)

# camera
bpy.ops.object.camera_add(location=(0,-8.3,2.3))
cam=bpy.context.object
bpy.context.scene.camera=cam
def point(obj,pt):
    obj.rotation_euler=(Vector(pt)-obj.location).to_track_quat('-Z','Y').to_euler()
point(cam,(0,0,1.15))
cam.data.lens=50

# lighting
bpy.ops.object.light_add(type='AREA',location=(-3,-4,5));key=bpy.context.object;key.data.energy=1100;key.data.shape='RECTANGLE';key.data.size=5
point(key,(0,0,1))
bpy.ops.object.light_add(type='AREA',location=(4,-1,3));fill=bpy.context.object;fill.data.energy=700;fill.data.size=4;point(fill,(1,0,1))
bpy.ops.object.light_add(type='AREA',location=(0,3,4));rim=bpy.context.object;rim.data.energy=900;rim.data.size=3;point(rim,(0,0,1.3))

scene=bpy.context.scene
scene.render.engine='BLENDER_EEVEE'
scene.render.resolution_x=1280;scene.render.resolution_y=720;scene.render.resolution_percentage=100
scene.render.image_settings.file_format='PNG'
scene.render.filepath=os.path.join(base,'qa_king_pose.png')
scene.world=bpy.data.worlds.new('World') if scene.world is None else scene.world; scene.world.color=(0.025,0.028,0.035)
scene.render.film_transparent=False
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(base,'qa_king_pose.blend'))
bpy.ops.render.render(write_still=True)
print(scene.render.filepath)