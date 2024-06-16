/**
 * JSON
 */
const person = {
    firstName: "Agung",
    lastName: "Krisna",
    address: {
        country: "Indonesia",
        province: "Jawa Barat",
        city: "Kabupaten Bandung",
        district: "Baleendah",
    },
    hobby: ["Mengunjungi Paskal", "Melihat Tobrut"],
};

const json = JSON.stringify(person);
const personAgain = JSON.parse(json);

console.info(json);
console.info(personAgain);
