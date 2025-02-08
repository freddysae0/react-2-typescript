export function dnaCost(baseCost: number, ...sequences: string[]) {
  let sum = baseCost;
  sequences.forEach(sequence => {
    return sum += sequence.length;
  });
  return sum;
}
let raptorCost = dnaCost(5000,"CGGCA");

console.log(raptorCost);
// Logs 5005
