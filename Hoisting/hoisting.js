// Hoisting với "var", "function declaration"
// Xet vi du sau
// console.log(age); //undefined
// console.log(fullname); //ReferenceError: fullname is not defined
// var age = 16;

// Xet vi du sau
// console.log(sum(6, 9));
// function sum(a, b) {
//   return a + b;
// }
// Luu y phan gan cung khong duoc dua len tren, phan khai bao cung cung duoc len tren

//Hoisting let, const
// {
//   console.log(fullname);
//   let fullname = "Nguyen Van A";
// }
// let, const cũng hoiting nhưng nó biến bị cho vào "Tempe Dead Zono" - vùng chết tạm thời
