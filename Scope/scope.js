// var message = "Hoc ve scope 2";

// function logger(first, last) {
//   console.log(first, last);
// }
// logger("Viet", "Kieu");
// logger("Vickiyz", "Kieu");
// logger("Tuan", "Viet");

// const age = 18;
// {
//   {
//     {
//       {
//         console.log(age);

//         const age = 16;
//       }
//     }
//   }
// }

// Biến trong hàm được tham chiếu bởi 1 hàm?
function makeCouter() {
  let couter = 0;
  function inscease() {
    return ++couter;
  }
  return inscease;
}

const inscease1 = makeCouter();

console.log(inscease1());
console.log(inscease1());
console.log(inscease1());
