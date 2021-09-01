// objects
// const person = {
//   name: 'Maximilian', 
//   age: 30
// };

// console.log(person);
// -------------------------------

// arrays 
// const person = {
//   name: 'Maximilian', 
//   age: 30, 
  // infers that hobbies array is string[]
  // hobbies: ['Sports', 'Cooking']
// };

// any[] lets you put any type of value in an array
// let favoriteActivities: any[];
// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];

// for (const hobby of person.hobbies) {
  // TS infers that hobbies are strings, so toUpperCase works 
//   console.log(hobby.toUpperCase());
// }
// -----------------------------------

// tuples -- ex: [1, 2] = fixed length and type of array
// tuples have exactly 2 elements: number, string
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string] // asserts tuple type
// } = {
//   name: 'Maximilian', 
//   age: 30, 
//   hobbies: ['Sports', 'Cooking'], 
//   role: [2, 'author']
// };

// TS allows push method on tuples so be aware that it might break
// person.role.push('admin') 
// ---------------------------------

// enum ===> enum{ NEW, OLD }
// enums are capitalized(required) or with all-uppercase(optional)
// enum Role { ADMIN, READ_ONLY, AUTHOR };

// can assign any value to the elements in the enum object, by default it'll start with 0, 1, 2, etc. 
// enum Role { ADMIN = 5, READ_ONLY = 100, AUTHOR = 200 }

// can also assign a string, or mix the values
// enum Role { ADMIN = 'ADMIN;, READ_ONLY = 'READ ONLY', AUTHOR = 200 }

// const person = {
//   name: 'Maximilian', 
//   age: 30, 
//   hobbies: ['Sports', 'Cooking'], 
//   role: Role.ADMIN
// };
// ----------------------------------

// any type -- can store any kind of value, no specific type assignment and TS won't complain if you don't designate a specific type
// avoid any wherever possible as using it basically gives you vanilla JS capabilities
// enum Role { ADMIN, READ_ONLY, AUTHOR };

// const person = {
//   name: 'Maximilian', 
//   age: 30, 
//   hobbies: ['Sports', 'Cooking'], 
//   role: Role.ADMIN
// };

// let favoriteActivities: any[];
// favoriteActivities = ['Sports', 5, false];

