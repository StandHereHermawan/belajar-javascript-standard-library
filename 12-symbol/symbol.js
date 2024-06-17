/**
 * Symbol
 */
{
    {
        const firstName = Symbol();
        const lastName = Symbol();

        const person = {};
        person[firstName] = "Arief";
        person[lastName] = "Hermawan";

        console.info(person);
        console.info(person[firstName]);
        console.info(person[lastName]);

        const symbolOne = Symbol("firstName");
        const symbolTwo = Symbol("firstName");

        console.info(symbolOne === symbolTwo);
    }

    // Iseng
    {
        const firstName = Symbol("firstName"); // parameter pada Symbol adalah deskripsi Symbol
        const lastName = Symbol("lastName"); // parameter pada Symbol adalah deskripsi Symbol

        const person = {};
        person[firstName] = "Arief";
        person[lastName] = "Hermawan";

        console.info(person);
        console.info(person[firstName]);
        console.info(person[lastName]);
    }
}

/**
 * Symbol For
 */
{
    const person = {};
    person[Symbol.for("firstName")] = "Agung";
    person[Symbol.for("lastName")] = "Krisna";

    console.info(person);
    console.info(person[Symbol.for("firstName")]);
    console.info(person[Symbol.for("lastName")]);
}
