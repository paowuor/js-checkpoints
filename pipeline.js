function pipeline(initialValue, functions) {
  let currentValue = initialValue;
  const steps = [];

  for (let i = 0; i < functions.length; i++) {
    const input = currentValue;

    const output = functions[i](input);

    steps.push({
      index: i,
      input: input,
      output: output
    });

    currentValue = output;
  }

  return {
    finalValue: currentValue,
    steps: steps
  };
}

const functions = [
  (val) => val + 1,
  (val) => val * 2,
  (val) => `Result: ${val}`,
];

const result = pipeline(0, functions);

console.log(result);