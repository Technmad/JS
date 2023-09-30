function printFruits(fruits) {
  for (var i = 0; i < fruits.length; i++) {
    (function (value) {
      setTimeout(function () {
        console.log(fruits[value]);
      }, value * 1000);
    })(i);
  }
}

printFruits(["Lemon", "Orange", "Mango", "Banana"]);
