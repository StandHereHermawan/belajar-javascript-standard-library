/**
 * Membuat Object Date
 */
{
    const dateOne = new Date();
    console.info(`dateOne: ${dateOne}`);

    const dateTwo = new Date(2020, 10, 10);
    console.info(`dateTwo: ${dateTwo}`);

    const dateThree = new Date(2021, 3, 1, 1, 0, 0, 0, 0);
    console.info(`dateThree: ${dateThree}`);

    const dateFour = new Date(1623167419514); // Unix Epoch Millisecond.
    console.info(`dateFour: ${dateFour}`);
}

/**
 * Epoch & Unix Timestamp
 */
{
    const timestamp = Date.now();
    console.info(`Date.now(): ${timestamp}`);

    const dateUnix = new Date(timestamp);
    console.info(`new Date(timestamp): ${dateUnix}`);

    console.info(`dateUnix.getTime(): ${dateUnix.getTime()}`);
}

/**
 * Parsing Date dari String
 */
{
    // Dari Slide Docs PZN.
    {
        const parseTimeStamp = Date.parse("2022-03-12T08:32:12.321+07:00");
        console.info(
            `Date.parse("2022-03-12T08:32:12.321+07:00"): ${parseTimeStamp}`
        );

        const parseDate = new Date(parseTimeStamp);
        console.info(`new Date(parseTimeStamp): ${parseDate}`);
    }

    // Iseng Sendiri
    {
        console.info(`Iseng Sendiri`);
        const parseTimeStampGw = Date.parse("2003-03-12T11:32:12.321+07:00");
        console.info(
            `Date.parse("2003-03-12T11:32:12.321+07:00"): ${parseTimeStampGw}`
        );

        const parseDate = new Date(parseTimeStampGw);
        console.info(`new Date(parseTimeStampGw): ${parseDate}`);
    }
}

/**
 * Date Getter dan Setter
 */
{
    console.info(`Date Getter dan Setter`);

    const date = new Date();
    date.setFullYear(2023);

    console.info(`date.getFullYear(): ${date.getFullYear()}`);
    console.info(`date.getMonth(): ${date.getMonth()}`);
    console.info(`date.getDate(): ${date.getDate()}`);
    console.info(`date.getHours(): ${date.getHours()}`);
    console.info(`date.getMinutes(): ${date.getMinutes()}`);
    console.info(`date.getSeconds(): ${date.getSeconds()}`);
    console.info(`date.getMilliseconds(): ${date.getMilliseconds()}`);
    console.info(`date.getTimezoneOffset(): ${date.getTimezoneOffset()}`);
}
