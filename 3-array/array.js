/**
 * Array Loop
 */
{
    const names = ["Arief", "Karditya", "Hermawan"];

    names.forEach(function (value, index) {
        console.info(`Anonymous Function, value: ${value}, index: ${index}`);
    });

    names.forEach((value, index) =>
        console.info(`Arrow Function, value: ${value}, index: ${index}`)
    );

    names.forEach((value) =>
        console.info(`Arrow function tanpa parenthesis, value: ${value}`)
    );
}

/**
 * Array Queue
 */
{
    const queue = [];

    queue.push("Arief");
    queue.push("Karditya");
    queue.push("Hermawan");

    console.info(`queue.shift(): ${queue.shift()}`);
    console.info(`queue.shift(): ${queue.shift()}`);
    console.info(`queue.shift(): ${queue.shift()}`);
    console.info(`queue.shift(): ${queue.shift()}`);
}

/**
 * Array Stack
 */
{
    const stack = [];

    stack.push("Arief");
    stack.push("Karditya");
    stack.push("Hermawan");

    console.info(`stack.pop(): ${stack.pop()}`);
    console.info(`stack.pop(): ${stack.pop()}`);
    console.info(`stack.pop(): ${stack.pop()}`);
    console.info(`stack.pop(): ${stack.pop()}`);
}

/**
 * Array Search
 */
{
    const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

    console.info(
        `source.find((value) => value > 3: ${source.find((value) => value > 3)}`
    ); // 4
    console.info(
        `source.findIndex((value) => value > 3): ${source.findIndex(
            (value) => value > 3
        )}`
    ); // 3
    console.info(`source.includes(7): ${source.includes(7)}`); // false
    console.info(`source.indexOf(5): ${source.indexOf(5)}`); // 4
    console.info(`source.lastIndexOf(5): ${source.lastIndexOf(5)}`); // 9
}

/**
 * Array Filter
 */
{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const ganjil = numbers.filter((value) => value % 2 === 1);
    const genap = numbers.filter((value) => value % 2 === 0);

    console.info(numbers);
    console.info(ganjil);
    console.info(genap);
}

/**
 * Array Transform
 */
{
    const names = "Arief Karditya Hermawan".split(" ");
    const namesUpperCase = names.map((value) => value.toLocaleUpperCase());
    console.info(namesUpperCase);
    console.info(names);

    const namesReduce = names.reduce((before, value) => before + " " + value);
    console.info(`reduce Function: ${namesReduce}`);

    const namesReduceRight = names.reduceRight(
        (before, value) => before + " " + value
    );
    console.info(`reduce Right Function: ${namesReduceRight}`);

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const total = numbers.reduce((result, value) => value + result);
    console.info(`numbers.reduce((result, value) => value + result: ${total}`);

    const totalFromRight = numbers.reduceRight(
        (result, value) => value + result
    );
    console.info(
        `numbers.reduceRight((result, value) => value + result): ${totalFromRight}`
    );
}
