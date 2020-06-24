let fruitSalads = [
  {
    apple: (msg) => {
      let tmp = "apple: ";
      console.log(tmp + msg);
      return "return from apple";
    },
    pear: () => {
      console.log("pear");
      return 2;
    },
    kiwi: "from Australia",
    hello: () => {
      console.log("hello und so");
    },
  },
];

console.log(fruitSalads[0]);
console.log(fruitSalads[0].apple("hello world"));
console.log(fruitSalads[0].apple());
console.log(fruitSalads[0].pear());
fruitSalads[0].kiwi = () => "i am now a new return from kiwi";

console.log(fruitSalads[0].kiwi());

fruitSalads[0].hello();
