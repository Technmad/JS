// using promises
// then Keyword chaning

new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(10);
  }, 3000);
})
  .then(function (value) {
    console.log(value);
    return value * 2;
  })
  .then(function (value) {
    console.log(value);
  });
