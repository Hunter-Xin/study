// function deepClone(obj) {
//   if (typeof obj !== "object" || obj == null) {
//     return obj;
//   }

//   let result;

//   if (obj instanceof Array) {
//     result = [];
//   } else {
//     result = {};
//   }

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result[key] = deepClone(obj[key]);
//     }
//   }
//   return result;
// }

function deepClone(obj) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  let result;
  if (obj instanceof Array) {
    result = [];
  }
  if (obj instanceof Object) {
    result = {};
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }

  return result;
}
let obj1 = {
  name: "ZS",
  age: 18,
  address: {
    city: "北京",
  },
};
let a = deepClone(obj1);
console.log(a);
a.name = "222222";
console.log(obj1, a);
