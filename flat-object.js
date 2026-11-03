function flattenAndMap(obj, mapper) {
  const flattened = {};

  let originalKeysCount = 0;
  let transformedKeysCount = 0;

  function flatten(currentObj, currentPath) {
    for (const key in currentObj) {
      if (Object.hasOwn(currentObj, key)) {
        originalKeysCount++;

        const value = currentObj[key];
        let newPath = "";

        if (currentPath === "") {
          newPath = key;
        } else {
          newPath = currentPath + "." + key;
        }

        if (
          value !== null &&
          typeof value === "object" &&
          !Array.isArray(value)
        ) {
          flatten(value, newPath);
        } else {
          flattened[newPath] = mapper(value);
          transformedKeysCount++;
        }
      }
    }
  }

  flatten(obj, "");

  return {
    flattened: flattened,
    originalKeysCount: originalKeysCount,
    transformedKeysCount: transformedKeysCount
  };
}

const nestedObj = {
  user: {
    name: "Alice",
    address: {
      city: "Wonderland",
      zip: 12345,
    },
  },
  meta: {
    roles: ["admin", "editor"],
    active: true,
  },
};

const toUpperCaseStrings = (value) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (Array.isArray(value)) {
    return value.map((item) => {
      if (typeof item === "string") {
        return item.toUpperCase();
      }

      return item;
    });
  }

  return value;
};

const result = flattenAndMap(nestedObj, toUpperCaseStrings);

console.log(result);