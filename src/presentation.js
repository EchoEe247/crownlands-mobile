// Player presentation invariants.
// The player uses the same character family as living NPCs (1.72 m baseline).
export const NPC_HEIGHT_M=1.72;
export const KING_HEIGHT_M=1.80;
export const KING_REGALIA_REFERENCE_HEIGHT_M=1.80;
export const KING_REGALIA_SCALE=KING_HEIGHT_M/KING_REGALIA_REFERENCE_HEIGHT_M;

export const KING_CAMERA={
  fov:66,
  defaultMode:'third',
  third:{
    standingDistance:4.8,
    seatedDistance:4.15,
    standingTargetY:.96,
    seatedTargetY:.86,
    defaultPitch:.14,
    minPitch:-.18,
    maxPitch:.46,
  },
  first:{
    eyeHeight:1.62,
    minPitch:-.52,
    maxPitch:.52,
  },
};
