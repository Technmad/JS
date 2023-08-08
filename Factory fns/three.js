const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return { sayName };
};

const Nerd = (name) => {
  const prototype = Person(name);
  const doSomethingNerdy = () => console.log("nerd stuff");
  return Object.assign({}, prototype, { doSomethingNerdy });
};

const jeff = Nerd("jeff");

jeff.sayName(); // my name is jeff
jeff.doSomethingNerdy(); // nerd stuff
