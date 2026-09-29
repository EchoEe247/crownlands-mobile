// Player presentation invariants.
// The player now uses the same character family as living NPCs (1.72 m baseline).
export const NPC_HEIGHT_M=1.72;
export const KING_HEIGHT_M=1.80;
export const KING_REGALIA_REFERENCE_HEIGHT_M=1.80;
export const KING_REGALIA_SCALE=KING_HEIGHT_M/KING_REGALIA_REFERENCE_HEIGHT_M;

export const KING_CAMERA={
  fov:66,
  standingDistance:20.0,
  seatedDistance:10.5,
  standingTargetY:1.02,
  seatedTargetY:.90,
  defaultPitch:.16,
};
