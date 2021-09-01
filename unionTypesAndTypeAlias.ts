// Union type allows you to accept two different types of values such as string and number
// use pipe | to separate types
// can have more than 2 types to accept

// literal types --> 'as-number' | 'as-text' allows two specific values

// can create a type alias to avoid repetition of union types
// use the 'type' keyword and capitalizing the alias. 
// typically used in conjunction with union types, as it lists multiple accepted types and helps reduce repeatetive code
type Combinable = number | string; 
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable, 
  input2: Combinable, 
  resultConversion: ConversionDescriptor
  ) {
  let result;
  if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);

