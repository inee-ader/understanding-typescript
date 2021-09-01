"use strict";
// Unknown type
// we don't know what the user will enter yet.
// 'unknown' is better to use than 'any' because it still allows you to have checks and build more structure
// but if you KNOW the type, specify that and try not to use 'unknown'
var userInput;
var userName;
// no complaints from TS: 
userInput = 5;
userInput = 'Max';
// can assign 'unknown' value to userName which is a string type only if userInput is string by checking here
if (typeof userInput === 'string') {
    userName = userInput;
}
// -------------------------
// Never type
// this function never returns a value
// TS infers 'void' type first, but 'never' is more clear
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {} // another case where 'never' will be used
}
generateError('An error occurred!', 500);
