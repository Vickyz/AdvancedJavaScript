// IIFE
// (function () {
//   console.log("NOW now");
//   console.log("VietKT");
// })();

// let i = 0;
// (function myFunc() {
//   i++;
//   console.log(i);

//   if (i < 10) myFunc();
// })();

// !(function () {
//   let fullName = "Viet Kieu";
//   console.log(fullName);
// })();

// const app = {
//   cars: [],
//   add(car) {
//     this.cars.push(car);
//   },
//   edit(index, car) {
//     this.cars[index] = car;
//   },
//   delete(index) {
//     this.cars.slice(index, 1);
//   },
// };

const app = (function () {
  //Private
  const cars = [];

  return {
    get(index) {
      return cars[index];
    },
    add(car) {
      this.cars.push(car);
    },
    edit(index, car) {
      this.cars[index] = car;
    },
    delete(index) {
      this.cars.slice(index, 1);
    },
  };
})();
