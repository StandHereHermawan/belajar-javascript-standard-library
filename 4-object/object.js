/**
 * Object freeze & seal
 */
{
    // Object Freeze
    {
        const person = {
            firstName: "Arief",
            lastName: "Hermawan",
        };

        Object.freeze(person);

        person.firstName = "Udin"; // nilai property pada object tidak berubah.
        delete person.lastName; // property pada object tidak berubah.

        console.info(`Object Freeze and Seal`);
        console.info(person);
    }

    // Object Seal
    {
        const person = {
            firstName: "Arief",
            lastName: "Hermawan",
        };

        Object.seal(person);

        person.firstName = "Udin"; // nilai property pada object berubah.
        delete person.lastName; // property pada object tidak dihapus.
        console.info(person);
    }
}

/**
 * Object Assign
 */
{
    const target = { firstName: "Hilmi" };
    const source = { lastName: "Muharrom" };

    console.info(`Object Assign`);
    console.info(source);
    console.info(target);

    Object.assign(target, source);

    console.info(source);
    console.info(target);

    console.info(`Object Assign coba-coba`);

    const tujuan = { firstName: "Arif" };
    const sumber = {
        firstName: "Agung",
        lastName: "Krisna",
    };

    console.info(tujuan);
    console.info(sumber);

    Object.assign(tujuan, sumber);

    console.info(tujuan); // Value pada firstName: meski sudah ada akan di override.
    console.info(sumber);
}

/**
 * Object Property Name & Value
 */
{
    const person = {
        firstName: "Arief",
        lastName: "Hermawan",
    };

    console.info(`Object Property Name & Value`);
    console.info(Object.values(person));
    console.info(Object.getOwnPropertyNames(person));
}
