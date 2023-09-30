new Promise(function (resolve, reject) {
  resolve("Username sucessfully changed");
})
  .then(function (result) {
    console.log(result);
  })
  .catch(function (result) {
    console.log(result);
  })
  .finally(function () {
    console.log("done");
  });
