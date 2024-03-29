// used to trigger as soon as any promise is completed

let req1 = new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    resolve("First!");
  }, 8000);
});

let req2 = new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    resolve("Second!");
  }, 3000);
});

Promise.race([req1, req2])
  .then(function (one) {
    console.log("Then: ", one);
  })
  .catch(function (one, two) {
    console.log("Catch: ", one);
  });
