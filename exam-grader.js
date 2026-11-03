async function examGrader(timeout, exercises) {
    let finalGrade = 0;
    let elapsedTime = 0;

    for (let exercise of exercises) {
        const startTime = Date.now();

        const result = await exercise();

        elapsedTime += Date.now() - startTime;

        if (elapsedTime > timeout) {
            break;
        }

        finalGrade += result.note;
    }

    return finalGrade;
}

const exercises = [
    () =>
        new Promise((res) =>
            setTimeout(() => res({ time: 1000, note: 15 }), 1000)
        ),
    () =>
        new Promise((res) =>
            setTimeout(() => res({ time: 2000, note: 18 }), 2000)
        ),
    () =>
        new Promise((res) =>
            setTimeout(() => res({ time: 500, note: 12 }), 500)
        ),
];

examGrader(3000, exercises).then((finalGrade) => {
    console.log(`Final Grade: ${finalGrade}`);
});

examGrader(4000, exercises).then((finalGrade) => {
    console.log(`Final Grade: ${finalGrade}`);
});