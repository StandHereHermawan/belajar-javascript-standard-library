/**
 * String Instance Method and Properties
 */
const arief = "Arief Karditya Hermawan";

console.info(`arief.length: ${arief.length}`);
console.info(`arief.toLowerCase(): ${arief.toLowerCase()}`); // Membuat string baru dengan semua alphabet pada variabel terkait menjadi huruf normal tanpa kapital.
console.info(`arief.toUpperCase(): ${arief.toUpperCase()}`); // Membuat string baru dengan semua alphabet pada variabel terkait huruf kapital semua.
console.info(arief.split(" "));
console.info(`arief.split(" "): ${arief.split(" ")}`);

const input = "     input data      ";
console.info(`variabel input: ${input}, length: ${input.length}`);
console.info(`input.trim(): ${input.trim()}, length: ${input.trim().length}`); // Menghapus spasi sebelah kiri dan kanan alphabet pada string.
console.info(
    `input.trimStart(): ${input.trimStart()}, length: ${
        input.trimStart().length
    }`
); // Menghapus spasi sebelah kiri alphabet pada string.
console.info(
    `input.trimEnd(): ${input.trimEnd()}, length: ${input.trimEnd().length}`
); // Menghapus spasi sebelah kanan alphabet pada string.
console.info(`variabel input: ${input}, length: ${input.length}`);

/**
 * String Instance Method and Properties
 */
const lagi = "     input      data      ";
console.info(`variabel lagi: ${lagi}, length: ${lagi.length}`);
console.info(`input.trim(): ${lagi.trim()}, length: ${lagi.trim().length}`); // tidak akan menghapus spasi diantara alphabet pada string.
console.info(
    `input.trimStart(): ${lagi.trimStart()}, length: ${lagi.trimStart().length}`
);
console.info(
    `input.trimEnd(): ${lagi.trimEnd()}, length: ${lagi.trimEnd().length}`
);
console.info(`variabel lagi: ${lagi}, length: ${lagi.length}`);

// Semua method manipulasi pada string diatas, menghasilkan variabel baru, tidak merubah value lamanya.
