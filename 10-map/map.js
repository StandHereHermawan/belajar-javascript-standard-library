/**
 * Map
 */
const map = new Map();
map.set("fullName", "Agung Krisna");
map.set("negara", "Indonesia");

console.info(map);
console.info(map.get("fullName"));
console.info(map.get("negara"));

// Menggunakan For Of
for (const element of map) {
    console.info(`${element[0]} : ${element[1]}`);
}

// Menggunakan Function for each didalam Map
map.forEach((value, key) => console.info(`${key} : ${value}`));
