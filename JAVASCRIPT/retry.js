let count = 0;

function unstable() {
  return new Promise((resolve, reject) => {
    count++;
    count < 3 ? reject() : resolve("Success");
  });
}

retry(unstable, 5);

function retry(fn, times) {
  fn()
    .then(console.log)
    .catch(() => {
      if (times > 1) retry(fn, times - 1);
      else console.log("Failed");
    });
}
