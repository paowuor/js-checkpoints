function FinalAttempt(callback, count) {
    return async function(...args) {
        for (let i = 0; i < count; i++) {
            try {
                return await callback(...args);
            } catch(error) {
                if (i === count - 1) {
                    return "Final Attempt Fail";
                }
            }
        }
    };
}

const unreliableAsyncFunction = async (param) => {
    if (Math.random() > 0.7) {
        return `Success with ${param}`;
    }

    throw new Error("Failure");
};

const finalAttempt = FinalAttempt(unreliableAsyncFunction, 3);

finalAttempt("test")
    .then((result) => console.log(result))
    .catch((err) => console.error(err));