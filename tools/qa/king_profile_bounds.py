import bpy, os, json
from mathutils import Vector
base='/data/data/com.termux/files/home/MainWorkspace/crownlands-mobile'
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=os.path.join(base,'assets','guard.glb'))
head=bpy.data.objects.get('head')
skin=bpy.data.objects.get('head.001')
if not head or not skin:
    raise SystemExit('head/head.001 missing')
inv=head.matrix_world.inverted()
pts=[inv @ (skin.matrix_world @ Vector(c)) for c in skin.bound_box]
bounds={
 'min_x':min(p.x for p in pts),'max_x':max(p.x for p in pts),
 'min_y':min(p.y for p in pts),'max_y':max(p.y for p in pts),
 'min_z':min(p.z for p in pts),'max_z':max(p.z for p in pts),
}
surface={'eye':-.12705323100090027,'brow':-.12449939548969269,'mustache':-.0705818235874176,'mouth':-.05803042650222778,'beard':-.05803042650222778}
boxes=[
 ('eyeL','eye',(-.056,-.1278,.138),(.043,.002,.014)),
 ('eyeR','eye',(.056,-.1278,.138),(.043,.002,.014)),
 ('irisL','eye',(-.056,-.1287,.138),(.012,.0015,.012)),
 ('irisR','eye',(.056,-.1287,.138),(.012,.0015,.012)),
 ('pupilL','eye',(-.056,-.1293,.138),(.0048,.001,.0075)),
 ('pupilR','eye',(.056,-.1293,.138),(.0048,.001,.0075)),
 ('browL','brow',(-.056,-.1252,.184),(.069,.002,.009)),
 ('browR','brow',(.056,-.1252,.184),(.069,.002,.009)),
 ('beard','beard',(0,-.0588,-.028),(.145,.002,.048)),
 ('mustacheL','mustache',(-.020,-.0712,.025),(.038,.002,.009)),
 ('mustacheR','mustache',(.020,-.0712,.025),(.038,.002,.009)),
 ('mouth','mouth',(0,-.0588,.000),(.062,.0015,.006)),
 ('hairTop',None,(0,.014,.252),(.216,.090,.010)),
 ('hairBack',None,(0,.122,.188),(.208,.008,.056)),
]
metrics=[]
for name,surface_key,pos,dim in boxes:
    mn=[pos[i]-dim[i]/2 for i in range(3)]
    mx=[pos[i]+dim[i]/2 for i in range(3)]
    metrics.append({
      'name':name,
      'front_extension':max(0,(surface[surface_key] if surface_key else bounds['min_y'])-mn[1]),
      'back_extension':max(0,mx[1]-bounds['max_y']),
      'side_extension':max(0,bounds['min_x']-mn[0],mx[0]-bounds['max_x']),
      'top_extension':max(0,mx[2]-bounds['max_z']),
      'bottom_extension':max(0,bounds['min_z']-mn[2]),
    })
max_front=max(m['front_extension'] for m in metrics)
max_back=max(m['back_extension'] for m in metrics)
max_side=max(m['side_extension'] for m in metrics)
max_top=max(m['top_extension'] for m in metrics)
print(json.dumps({'head_bounds':bounds,'max_front_extension':max_front,'max_back_extension':max_back,'max_side_extension':max_side,'max_top_extension':max_top,'overlays':metrics},indent=2))
if max_front>.003 or max_back>.003 or max_side>.003 or max_top>.003:
    raise SystemExit('V27 overlay exceeds silhouette-neutral tolerance')