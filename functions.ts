function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(getSum(1, 4));

let mySum2 = function (num1: any, num2: any): number {
  if (typeof num1 === 'string') {
    num1 = parseInt(num1);
  }
  return num1 + num2;
};

console.log(mySum2('3', 5));

function getName(first: string, last?: string): string {
  if (last === undefined) return first;
  return first + ' ' + last;
}

console.log(getName('John'));

function myVoidFunction(): void {
  return;
}
