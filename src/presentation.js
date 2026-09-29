// Player presentation invariants. These values are tuned against the actual
// Pixel gameplay frame: the king should read as tall, not oversized.
export const KING_HEIGHT_M=1.86;
export const KING_REGALIA_REFERENCE_HEIGHT_M=2.18;
export const KING_REGALIA_SCALE=KING_HEIGHT_M/KING_REGALIA_REFERENCE_HEIGHT_M;

export const KING_CAMERA={
  fov:64,
  standingDistance:12.2,
  seatedDistance:8.2,
  standingTargetY:1.08,
  seatedTargetY:.93,
  defaultPitch:.19,
};
