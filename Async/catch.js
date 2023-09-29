// The catch callback is executed when the promise is rejected

new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("try again!");
  }, 2000);
})
  .then(function (result) {
    console.log(result);
  })
  .catch(function (result) {
    console.log(result);
  });
