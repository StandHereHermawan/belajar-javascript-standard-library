/**
 * Membuat RegExp
 */
{
    const regex1 = /[a]/;
    const regex2 = new RegExp("[a]");
    const regex3 = new RegExp(/[a]/);
}

/**
 * RegExp Instance Method
 */
{
    const name = "Arief Karditya Hermawan";
    const regex = /Arief/;

    let result = regex.exec(name);
    console.info(result);

    let test = regex.test(name);
    console.info(test);
}

/**
 * RegExp Modifier
 */
{
    const name = "eko kurniawan\neKo khannedy\nEdi Kurniawan";
    const regex1 = /eko/g;
    const regex2 = /kurniawan/gi;

    let result;
    while ((result = regex1.exec(name)) !== null) {
        console.info(result);
    }

    while ((result = regex2.exec(name)) !== null) {
        console.info(result);
    }
}

/**
 * Contoh Fitur RegExp
 */
{
    const regex = /ek[aiueo]/gi;
    const text = "eko ado eki eka ejo emi elo eke";

    while ((result = regex.exec(text)) !== null) {
        console.info(result);
    }
}

/**
 * Regular Expression di String.
 */
{
    const string = "eko ado eki eka ejo emi elo eke";

    console.info(string.match(/ek[aiueo]/gi)); // ["eko","eki","eka","eke"]
    console.info(string.search(/ek[aiueo]/gi)); // 0

    // di replace semua karena regex
    console.info(string.replace(/ek[aiueo]/gi, "Keren")); // keren ado keren keren ejo emi elo keren
    console.info(string.replaceAll(/ek[aiueo]/gi, "Keren")); // keren ado keren keren ejo emi elo keren
    console.info(string.split(/e/gi)); // ["", "ko ado", "ki ", "ka ", "jo ", "mi ", "lo ", "k", ""]
}
