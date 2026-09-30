// Runtime helpers kept DOM-free so save/fast-forward behavior can be regression tested.
export function safePersist(storage,key,value,onError){
  try{storage.setItem(key,typeof value==='string'?value:JSON.stringify(value));return true}
  catch(err){onError?.(err);return false}
}
export function fastForwardSimulation(realSeconds,advance,step,maxStep=1){
  let left=Math.max(0,Number(realSeconds)||0),steps=0;
  while(left>0){const dt=Math.min(maxStep,left);advance(dt);step(dt);left-=dt;steps++}
  return steps
}
