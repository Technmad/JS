let user = {
  name: "anurag",
  surname: "pathak",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

user.fullName = "rakesh roshan";
console.log(user.fullName);
