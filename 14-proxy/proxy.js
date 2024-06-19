/**
 * Membuat Handler
 */
{
    const target = {};

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
    const target = {};

    const handler = {
        get: function (target, property) {
            console.info(`access property ${property}`);
            return target[property];
        },
        set: function (target, property, value) {
            console.info(`Change property ${property} : ${value}`);
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
