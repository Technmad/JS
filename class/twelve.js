class Button {
  constructor(value) {
    this.value = value;
  }

  //   click() {
  //     alert(this.value);
  //   }

  click = () => {
    alert(this.value);
  };
}

let button = new Button("hello");

setTimeout(button.click, 1000); // hello

// setTimeout(() => button.click(), 1000)
