// Player presentation invariants. Keep these separate from simulation state so
// visual scale/camera tuning can be regression-tested without booting WebGL.
export const KING_HEIGHT_M=1.92;
export const KING_REGALIA_REFERENCE_HEIGHT_M=2.18;
export const KING_REGALIA_SCALE=KING_HEIGHT_M/KING_REGALIA_REFERENCE_HEIGHT_M;

export const KING_CAMERA={
  standingDistance:7.10,
  seatedDistance:5.55,
  standingTargetY:1.31,
  seatedTargetY:.98,
};
