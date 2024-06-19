/**
 * Base64
 */
const original = "Arief&Karditya=Hermawan";

const encoded = btoa(original);
console.info(encoded);

const decoded = atob(encoded);
console.info(decoded);
