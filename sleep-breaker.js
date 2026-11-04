function sleepBreaker(delay, breaker) {
  const sleep = new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, delay);
  });

  const interruption = new Promise(function(resolve) {
    breaker().then(function() {
      resolve();
    });
  });

  return Promise.race([sleep, interruption]);
}

const breaker = async () => {
  await new Promise((res) => setTimeout(res, 100));
  return true;
};

sleepBreaker(1000, breaker).then(() => {
  console.log("Wake up!");
});