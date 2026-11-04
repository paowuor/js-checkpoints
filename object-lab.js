function mergeAndTransform(objects, transforms) {
  const finalObject = {};

  let keysAdded = 0;
  let keysOverwritten = 0;
  let transformationsCount = 0;

  // Phase 1: Merge the objects
  for (const obj of objects) {
    for (const key in obj) {
      if (Object.hasOwn(obj, key)) {
        if (Object.hasOwn(finalObject, key)) {
          finalObject[key] = obj[key];
          keysOverwritten++;
        } else {
          finalObject[key] = obj[key];

          if (objects.indexOf(obj) !== 0) {
            keysAdded++;
          }
        }
      }
    }
  }

  // Phase 2: Apply transformations
  for (const transform of transforms) {
    const transformedObject = transform(finalObject);

    if (
      transformedObject !== null &&
      typeof transformedObject === "object"
    ) {
      // Update the object with the transformation result
      for (const key in finalObject) {
        delete finalObject[key];
      }

      Object.assign(finalObject, transformedObject);
    }

    transformationsCount++;
  }

  return {
    finalObject: finalObject,
    transformationsCount: transformationsCount,
    keysAdded: keysAdded,
    keysOverwritten: keysOverwritten
  };
}

const objArray = [
  { a: 1, b: 2 },
  { b: 3, c: 4 },
  { d: 5 }
];

const transforms = [
  (obj) => ({ ...obj, a: obj.a * 10 }),

  (obj) => {
    const { b, ...rest } = obj;
    return rest;
  },

  (obj) => {
    if (obj.e) {
      return obj;
    }

    return { ...obj, e: "newKey" };
  }
];

const result = mergeAndTransform(objArray, transforms);

console.log(result);