/**
 * RegExp Instance Method
 */
console.info(`Start of File Coba-Coba`);
{
    // Coba-Coba yang kurang tepat
    {
        const name = "Arief Karditya Arief Hermawan";
        const regex = /arief/;

        let result = regex.exec(name);
        console.info(`regex: /arief/, name: ${name}, regex.exec(name): `);
        console.info(result);

        let test = regex.test(name);
        console.info(`regex: /arief/, name: ${name}, regex.test(name): `);
        console.info(test);
    }

    // Coba-Coba yang tidak ada
    {
        const name = "Tidak ada Tidak";
        const regex = /Arief/;

        let result = regex.exec(name);
        console.info(`regex: /Arief/, name: ${name}, regex.exec(name): `);
        console.info(result);

        let test = regex.test(name);
        console.info(`regex: /Arief/, name: ${name}, regex.test(name): `);
        console.info(test);
    }

    // Coba-Coba yang ada
    {
        const name = "Arief Karditya Arief Hermawan";
        const regex = /Arief/;

        let result = regex.exec(name);
        console.info(`regex: /Arief/, name: ${name}, regex.exec(name): `);
        console.info(result);

        let test = regex.test(name);
        console.info(`regex: /Arief/, name: ${name}, regex.test(name): `);
        console.info(test);
    }
    console.info(`end of RegExp instance method`);
}

/**
 * RegExp Modifier
 */
{
    const name =
        "\neko kurniawan\neKo khannedy\nEdi Kurniawan\nedi ekO\nKurniawan Eko\nEdo Kurniawan\n";
    const regex1 = /eko/g;
    const regex2 = /eko/gi;
    const regex3 = /^eko/gi; // "^" was Assertions.
    const regex4 = /^eko/gim;
    const regex5 = /kurniawan/gi;
    const regex6 = /^e.o/gim;
    const regex7 = /e.o/gim;
    // advanced regex
    const regex8 = /e.[ioaeu]/gi;

    let result;
    console.info(`regex1: ${regex1}, name: ${name}regex.exec(name): `);
    while ((result = regex1.exec(name)) !== null) {
        console.info(result);
    }

    console.info(`regex2: ${regex2}, name: ${name}regex.exec(name): `);
    while ((result = regex2.exec(name)) !== null) {
        console.info(result);
    }

    console.info(`regex3: ${regex3}, name: ${name}regex.exec(name): `);
    while ((result = regex3.exec(name)) !== null) {
        console.info(result);
    }

    console.info(`regex4: ${regex4}, name: ${name}regex.exec(name): `);
    while ((result = regex4.exec(name)) !== null) {
        console.info(result);
    }

    console.info(`regex5: ${regex5}, name: ${name}regex.exec(name): `);
    while ((result = regex5.exec(name)) !== null) {
        console.info(result);
    }

    console.info(`regex6: ${regex6}, name: ${name}regex.exec(name): `);
    while ((result = regex6.exec(name)) !== null) {
        console.info(result);
    }

    console.info(`regex7: ${regex7}, name: ${name}regex.exec(name): `);
    while ((result = regex7.exec(name)) !== null) {
        console.info(result);
    }

    console.info(`regex8: ${regex8}, name: ${name}regex.exec(name): `);
    while ((result = regex8.exec(name)) !== null) {
        console.info(result);
    }
}

/**
 * Regular Expression di String.
 */
{
    const name = "edo eko eki eka eku eke edo eko eki";

    console.info(name.match(/ek[auieo]/gi));
    console.info(name.search(/ek[auieo]/gi));
    console.info(name.replace(/ek[auieo]/i, "kamu"));
    console.info(name.replace(/ek[auieo]/gi, "kamu"));
    console.info(name.replaceAll(/ek[auieo]/gi, "kamu"));
    console.info(name.split(/e/ig));
}
console.info(`End of File Coba-Coba`);
