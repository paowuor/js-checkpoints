function createCurriedFilterAndMap(criteria, mapper) {
    return function (obj) {
        const filteredObject = {};
        let keysKept = 0;
        let keysFilteredOut = 0;

        for (const [key, value] of Object.entries(obj)) {
            if (criteria(key, value)) {
                filteredObject[key] = mapper(value);
                keysKept++;
            } else {
                keysFilteredOut++;
            }
        }

        return {
            filteredObject,
            keysKept,
            keysFilteredOut
        };
    };
}

const isNumberValue = (key, value) => typeof value === "number";

const increment = (val) =>
    typeof val === "number" ? val + 1 : val;

const filterAndIncrementNumbers = createCurriedFilterAndMap(
    isNumberValue,
    increment
);

const inputObject = {
    name: "Alice",
    age: 25,
    score: 99,
    active: true,
};

const result = filterAndIncrementNumbers(inputObject);

console.log(result);