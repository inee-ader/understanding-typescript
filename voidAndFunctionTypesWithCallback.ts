// you can specify what type the return value is by adding : number after what's added in parenthesis

// TS already infers that the return value is going to be a number since the only types accepted in n1 and n2 are numbers, so it's unnecessary here to specify the return value as a number

// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }

// void return type means the function returns nothing
// doesn't need to be specified here
// function printResult(num: number): void {
//   console.log('Result: ' + num);
// }

// taking a callback (cb) and specifying that it'll take a number and not return anyting (void)--ignore return value
// function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//   const result = n1 + n2;
//   cb(result);
// }

// printResult() gets a number, add() adds two numbers to pass to printResult
// printResult(add(5, 12));

// Function Types
// can set Function type so that combinedValues ONLY accepts a function
// but just specifying Function isn't enough. We could point to printResult() and that only takes one argument.
// let combineValues: Function; 

// let's specify HOW the Function should look. On the right side of the arrow function you put the return TYPE
// filling the () says how many things to accept, and what type they are. so combineValues takes in 2 numbers, and returns a number
// let combineValues: (a: number, b: number) => number;
// points to add() function above
// combineValues = add;
// TS complains bc printResult() takes only one argument
// combineValues = printResult;

// sends (8, 8) input to add() method
// console.log(combineValues(8, 8));

// addAndHandle(10, 20, (result) => {
  // TS knows result will be a number because it points to a number in the callback
  // console.log(result);
// });
