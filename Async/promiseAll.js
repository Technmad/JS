// using promise.all to create response for multiple asyn tasks.

let request1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("First!");
  }, 2000);
});
let request2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Second!");
  }, 2000);
});

Promise.all([request1, request2]).then((result) => {
  console.log("got it", result);
});
