var a = Math.floor(Math.random() * 10);
var b = Math.floor(Math.random() * 100);
function random(base) {
  if (base && base % 1 === 0) {
    return Math.floor(Math.random() * base);
  } else {
    return 0;
  }
}

// import * as data from "sam-test-data";

// console.log(data.random(100),data.a,data.b)
console.log(random(100), a, b);

// const data = require("sam-test-data")

// console.log(data.random(),data.a,data.b)

// module.exports = {}

export default random;
