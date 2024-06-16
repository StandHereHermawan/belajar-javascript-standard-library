/**
 * BigInt
 */
const bigIntA = BigInt(Number.MAX_SAFE_INTEGER);
const bigIntB = BigInt(Number.MAX_SAFE_INTEGER);

const bigIntC = bigIntA + bigIntB;
console.info(`Big Integer C: ${bigIntC}`);
console.info(`Big Integer B: ${bigIntB}`);
console.info(`Big Integer A: ${bigIntA}`);
console.info(`typeof bigIntC: ${typeof bigIntC}`);