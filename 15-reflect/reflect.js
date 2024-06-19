/**
 * Reflect
 */
const person = {};

Reflect.set(person, "firstName", "Arief");
Reflect.set(person, "lastName", "Hermawan");

console.info(person);

console.info(Reflect.get(person, "firstName"));
console.info(Reflect.get(person, "middleName"));
console.info(Reflect.get(person, "lastName"));

console.info(Reflect.has(person, "firstName")); // True
console.info(Reflect.has(person, "middleName")); // False
console.info(Reflect.has(person, "lastName")); // True
