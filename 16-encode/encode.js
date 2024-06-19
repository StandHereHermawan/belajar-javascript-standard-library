/**
 * encodeURI dan decodeURI
 */
{
    const url = "http://www.contoh.com/?name=Arief Karditya Hermawan";
    console.info(url);

    const encoded = encodeURI(url);
    console.info(encoded);

    const decoded = decodeURI(encoded);
    console.info(decoded);
}

/**
 * encodeURIComponent dan decodeURIComponent
 */
{
    const value = "Arief&Karditya=Hermawan";
    const url = "http://www.contoh.com/?name=";

    const encoded = encodeURIComponent(value);
    console.info(url + encoded);

    const decoded = decodeURIComponent(encoded);
    console.info(url + decoded);
}
