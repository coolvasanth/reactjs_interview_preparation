// Explain the concepts of Sets, WeakSets, Maps, and WeakMaps in JavaScript and
// their use cases for managing collections.

/******************** Sets ********************/
/**
 * 1. A Set stores a collection of unique values.
 * 2. Duplicate values are not allowed.
 * 3. Order of elements is not preserved (insertion order is not remembered).
 * 4. Useful for checking if a value exists in a collection or performing set 
 *   operations like unions and intersections. 
 */
const numbers = [1, 2, 3, 1, 2];
const uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers); // Output: {1, 2, 3}


/******************** WeakSets ********************/
/**
 1. Similar to Sets, but stores only object references.
 2. Weak references don't prevent the object from being garbage collected 
    if there are no other strong references to it.
 3. Useful for associating data with objects without affecting their garbage collection.
*/

const cache = new WeakSet();

function fetchData(object) {
  if (cache.has(object)) {
    // Data already cached for this object
  } else {
    // Fetch data and store it in cache with a weak reference to the object
    cache.add(object);
    // ... fetch and store data
  }
}

/******************** Maps ********************/
/**
 1. A Map stores key-value pairs, similar to objects.
 2. Keys can be of any data type, not just strings (like in objects).
 3. Order of insertion is preserved.
 4. Useful for storing data associated with unique keys and when keys are not just strings.
*/

const users = new Map();
users.set(1, { name: "Alice", age: 30 });
users.set("bob", { name: "Bob", age: 25 });
console.log(users.get(1)); // Output: { name: "Alice", age: 30 }


/******************** WeakMaps ********************/
/**
  1. Similar to Maps, but stores key-value pairs with weak object references as keys.
  2. The value can be any data type.
  3. Useful for associating data with objects without affecting their garbage collection.
*/
const elementData = new WeakMap();

function storeElementInfo(element, data) {
  elementData.set(element, data);
}

function retrieveElementInfo(element) {
  return elementData.get(element);
}


//Choosing the Right Collection:
/*
1. Use Sets for collections of unique values.
2. Use WeakSets for object references that don't affect garbage collection.
3. Use Maps for key-value pairs with any data type as keys, and order matters.
4. Use WeakMaps for associating data with objects without affecting their garbage 
   collection, for temporary data.
*/