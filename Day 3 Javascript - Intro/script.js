console.log("Test");

//Expression
let sum = 10 + 5;

let num1 = "2023/05/30";
let num2 = 5;
let sum2 = new Date(num1);

console.log("SUM", sum, sum2);

//Assigment
let x = 10;
let m = "Message";
let z = 1;

let b = "1";
let c = "1";

//boolean, null, undefined, value is zero

if (b) {
  console.log("Z");
} else {
  console.log("Not Z");
}

const value = b === c;

const func = () => {
  if (value) {
    console.log("Equal");
    if (b) {
      console.log("b is true");
    }
    return "";
  } else {
    console.log("Not Equal");
    return "";
  }
};

const func1 = () => {
  //check value is true or false
  if (!value) {
    console.log("Not Equal");
    return "";
  }
  console.log("Equal");
};

func();
func1();

const tur = value ? ("Equal" ? true : false) : "Not Equal";

switch (tur) {
  case "Equal":
    console.log("Equal");
    break;
  case "Not Equal":
    console.log("Not Equal");
    break;
  default:
    console.log("Default");
    break;
}

//turnary operator
console.log("tur", tur);

const checker = {
  test1: "This is a test",
  test2: "This is a test2",
};
console.log("checker", checker.test1);
console.log("checker2", checker["test1"]);

const testKey = "test1";
console.log("checker3", checker[testKey]);

if (testKey === "test1") {
  console.log("ch", checker.test1);
}

//Array

/**
 * @param
 */

/**
 *
 */

const obj1 = {
  condition1: (value) => {
    console.log("func1");
    return value;
  },
  condition2: (value) => {
    console.log("func2");
    return "value50";
  },
};

const conditionToCall = "condition1";

console.log("Function call", obj1.condition1());
console.log("Function refer", obj1.condition1);

console.log("Func with par", obj1[conditionToCall](50));

// obj1[conditionToCall](50);

const str1 = "1234";
const str10 = "1234";
const num = 1234;

const str00 = `1234`;

console.log("My name is " + "John" + " and I am" + 20 + " years old");

console.log(`my name is ${str1} and I am ${num} years old`);

// const str = "1234";

// str = 5678;

let str66 = "1234";
str66 = 5678;

// console.log("STRING const", str);
console.log("STRING let", str66);

const booleanVar = true;

const jwtToken = "aexrh18731236";

if (typeof jwtToken === "string") {
  console.log("String");
}
// if (jwtToken) {
//   return true;
// } else {
//   return false;
// }

const hasJWT = jwtToken ? true : false;

const hasJWT2 = !!jwtToken;

const checkJWT = (jwtToken) => {
  if (jwtToken) {
    return true;
  } else {
    return false;
  }
};

const checkJWT2 = (jwtToken) => {
  return !!jwtToken;
};

console.log("first", hasJWT2);
console.log("checkJWT", checkJWT2(jwtToken));

const orOperator = true || false;
const andOperator = true && false;
const andOperatorCmp = (true && false && true) || true;
console.log("andOperatorCmp", andOperatorCmp);

const name = "John";
const age = 20;

if ((name === "John" && age) || age === 20) {
  // if (name === "John" && age) {
  console.log("Name is John and age is" + age);
} else {
  console.log("Name is not John or age is not 20");
}

let ten = 10;
x += 5; // x is now 15

const arr = [1, 2, 3, 4, 5];

const arr1 = [
  {
    name: "John",
    age: 20,
  },
];

const objJohn = {
  name: "John",
  age: 20,
};
const arrJohn = [
  objJohn,
  {
    name: "Ram",
    age: 25,
  },
];

// const diff = [{}, 123];
// console.log("diff", diff);

const arrayObj1 = arrJohn[0];
console.log("arrayObj1", {
  arrayObj1,
  isTrue: arrayObj1 === objJohn,
});

const arrayObj2 = objJohn;
let arrayObj3 = objJohn;
console.log("arrayObj2", {
  arrayObj2,
  arrayObj3,
  isTrue: arrayObj2 === arrayObj3,
});

let ob = { name: "Dionysia", age: 29 };
let ob1 = { name: "Dionysia", age: 23 };

if (ob1.name === ob.name && ob1.age === ob.age) {
  console.log("Equal");
}

const obKeys = Object.keys(ob).map((key, index) => {
  console.log("key", key, index);
  return {
    key,
    value: ob[key],
  };
});

// console.log("obKeys", obKeys);

// console.log(ob === ob1);

const arr2 = [1, 2, 3, 4, 5];
const arrayVal = arr2[0];
const sliced = arr2.slice(1, 3);
console.log("first", {
  arrayVal,
  sliced,
});

const array3 = [...arr2, 6];
const [arrayValDest, ...rest] = arr2;
console.log("arrayValDest", arrayValDest, rest);

// const { } = obj1

console.log("first", objJohn.name);
const { name: johnNameDest } = objJohn;
console.log("johnNameDest", johnNameDest);
const johnName = objJohn.name;
