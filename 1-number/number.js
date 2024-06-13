/**
 * Number.
 */
const input = "12345";
const number = Number(input);

console.info(`tipe data: ${typeof input}, value: ${number}, nama_variabel input.`);
console.info(`tipe data: ${typeof number}, value ${number}, nama_variabel number.`);

/**
 * Number static properties.
 */
console.info(`Number.MIN_VALUE: ${Number.MIN_VALUE}`);
console.info(`Number.MIN_SAFE_INTEGER: ${Number.MIN_SAFE_INTEGER}`);
console.info(`Number.MAX_VALUE: ${Number.MAX_VALUE}`);
console.info(`Number.MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}`);
console.info(`Number.NaN: ${Number.NaN}`);

/**
 * Number Static Method
 */
const data = Number('12345');

console.info(`Number.isInteger(data): ${Number.isInteger(data)}`);
console.info(`Number.isNaN(data): ${Number.isInteger(data)}`);

/**
 * Number Instance Method
 */
const value = Number(12345);
console.info(`Binary dari number 12345, value.toString(2): ${value.toString(2)}`);
console.info(`value.toLocaleString("id-ID"): ${value.toLocaleString("id-ID")}`);
console.info(`value.toLocaleString("en-US"): ${value.toLocaleString("en-US")}`);
