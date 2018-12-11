var string = "Hello World!";
console.log(string);

var number = 42;
console.log(number);

var array = ["string", "number", 42, string];
console.log(array);

//var two = "2";
//var numberTwo = 2;
//if (two === numberTwo) {
// console.log("ir vienadi");
//}
function plus(firstnumber, secondnumber) {
  return firstnumber + secondnumber;
}
console.log(plus(22, 22));

function minus(firstnumber, secondnumber) {
  return firstnumber - secondnumber;
}
console.log(minus(22, 12));

function multiply(firstnumber, secondnumber) {
  return firstnumber * secondnumber;
}
console.log(multiply(9, 9));

function divide(firstnumber, secondnumber) {
  return firstnumber / secondnumber;
}
console.log(divide(50, 9));

function calculateTip(total, percentage) {
  //return multiply(total, divide(percentage, 100));
  return total * (percentage / 100);
}
console.log(calculateTip(26.33, 13));

function buyMilk(money) {
  var milkPrice = 0.9;

  console.log("man ir:" + money + " eiro");
  console.log("atrodi Rimi pari ielai");
  console.log("aizej uz to");
  console.log("atrodi pienu");

  if (money >= milkPrice) {
    console.log(milkPrice);
    console.log("nopirkt to");
  } else {
    console.log("Nepietiek naudas");
  }

  console.log("nac majas");

  return {
    name: "Baltais",
    volume: "1l",
    price: milkPrice
  };
}

var milk = buyMilk(1);

console.log(milk);

var tries = [2, 1.5, 2.24, 0.5, 0.6];

for (var i = 0; i < tries.length; i++) {
  buyMilk(tries[i]);
}

buyMilk("1.5");

var person = {
  firstName: "Alise",
  lastName: "Tanona",
  age: 36,
  hobbies: ["foto", "traveling", "dancing"],

  walk: function() {
    console.log("Jurgis iet");
  },

  relatives: {
    sister: [
      {
        name: "Elina"
      }
    ]
  }
};

console.log(person.relatives.sister);
