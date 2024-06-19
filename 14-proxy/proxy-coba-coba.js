/**
 * Membuat Handler
 */
console.info(`Start coba-coba.`);
{
    const target = {
        middleName: "Karditya",
    };

    const handler = {
        get: function (target, property) {
            return target[property];
        },
        set: function (target, property, value) {
            target[property] = value;
        },
    };
    console.info(target);

    /**
     * Membuat Proxy
     */
    const proxy = new Proxy(target, handler);
    proxy.firstName = "Arief";
    proxy.lastName = "Hermawan";

    console.info(proxy.firstName);
    console.info(proxy.lastName);
    console.info(target);
}

/**
 * Log Handler
 */
{
    const target = {
        firstName: "Agung",
        middleName: null,
        lastName: "Krisna",
    };

    const handler = {
        get: function (target, property) {
            console.info(`Access property ${property}`);
            return target[property];
        },
        set: function (target, property, value) {
            if (value == null) {
                // throw new Error("Tidak Boleh Null");
                target[property] = "";
            } else {
                console.info(`Change property ${property} : ${value}`);
                target[property] = value;
            }
        },
    };
    console.info(target);

    /**
     * Membuat Proxy
     */
    const proxy = new Proxy(target, handler);
    proxy.firstName = "Arief";
    proxy.middleName = "Karditya";
    proxy.lastName = "Hermawan";

    console.info(proxy.firstName);
    console.info(proxy.middleName);
    console.info(proxy.lastName);
    console.info(target);
}
console.info(`End of coba-coba.`);
