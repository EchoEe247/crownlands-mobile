// Player presentation invariants.
// The player uses the same character family as living NPCs (1.72 m baseline).
export const NPC_HEIGHT_M=1.72;
export const KING_HEIGHT_M=1.80;
export const KING_REGALIA_REFERENCE_HEIGHT_M=1.80;
export const KING_REGALIA_SCALE=KING_HEIGHT_M/KING_REGALIA_REFERENCE_HEIGHT_M;

export const KING_REGALIA={
  pauldronRadius:.065,
  capeTopY:1.34,
  capeBottomY:.78,
  capeTopHalfWidth:.18,
  capeBottomHalfWidth:.24,
  sashHeight:.42,
  crownRadius:.13,
  crownSpikeHeight:.11,
  crownHeadOffset:.278,
  crownBandHeight:.065,
};


export const KING_FACE={
  frontY:-.132,
  eyeX:.058,
  eyeZ:.138,
  eyeRadius:.024,
  browZ:.184,
  browWidth:.078,
  noseTipY:-.185,
  mouthZ:.004,
  jawTopZ:.070,
  jawBottomZ:-.070,
  jawTopHalfWidth:.112,
  jawBottomHalfWidth:.118,
  cheekX:.084,
  cheekZ:.082,
};

export const KING_CAMERA={
  fov:66,
  defaultMode:'third',
  look:{
    yawSensitivity:.0048,
    pitchSensitivity:.0034,
    angleDamping:14,
    positionDamping:13,
  },
  third:{
    standingDistance:3.95,
    seatedDistance:3.75,
    standingTargetY:.94,
    seatedTargetY:.84,
    defaultPitch:.08,
    minPitch:-.06,
    maxPitch:.26,
  },
  first:{
    eyeHeight:1.62,
    minPitch:-.52,
    maxPitch:.52,
  },
};