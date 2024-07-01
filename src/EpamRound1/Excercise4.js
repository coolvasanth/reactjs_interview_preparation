// Explain primitive types in Javascript beyond number, string and boolean

/*******************Definition of Primitive data types*************************/
/**
 * Primitive data types in JavaScript are fundamental building 
 * blocks that represent simple, indivisible pieces of data
*/

// 1. Symbol: A unique and immutable (unchangeable) identifier. 
// Useful for creating private properties within objects or for creating unique keys in objects.

const uniqueSymbol1 = Symbol("This is a unique symbol");
const uniqueSymbol2 = Symbol("This is a unique symbol");

console.log(uniqueSymbol1 === uniqueSymbol2); // false (Symbols are always unique)

// 2. BigInt
/**
 * Introduced in ES2020 (ECMAScript 2020), this type represents integers with arbitrary 
 * precision. Numbers in JavaScript are typically 64-bit floating-point numbers, 
 * which can lose precision for very large or very small integers. BigInt allows for 
 * much larger numbers which is typically 2^53 – 1.
*/
const bigNumber = 9007199254740991n; // Add 'n' at the end to denote BigInt
console.log(typeof bigNumber); // output: bigint

// 3. Undefined:
/* Represents the absence of a value. A variable declared but not assigned a value will 
have this type.*/
let x;
console.log(typeof x); // output: undefined

// 4. null:
/* 
Denotes the intentional absence of an object value. It's different from undefined as it 
explicitly indicates that there is no object value.
*/
let y = null;
console.log(y); // output: null
console.log(typeof y); // output: object (although it's technically not an object)
