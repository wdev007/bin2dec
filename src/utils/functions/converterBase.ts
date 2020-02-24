import Stack from "../Queue";
// [1, 1, 0, 0, 1]
function converterBase(numbers: Array<number>): number {
  const stack = new Stack();
  let result: number = 0;

  numbers.map(number => stack.push(number));
  const size = stack.size();
  
  for (let i = 0; i < size; i++) {
    const pow: number = Math.pow(2, i);
    const pop = stack.pop();
    result += pop * pow;
  }
  return result;
}

export default converterBase;