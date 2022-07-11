// function createCounter() {
//   let couter = 0;

//   function increase() {
//     return ++couter;
//   }
//   return increase;
// }

// const couster1 = createCounter();

// console.log(couster1());
// console.log(couster1());
// console.log(couster1());

// const couster2 = createCounter();

// console.log(couster2());
// console.log(couster2());
// console.log(couster2());

// - Viết code ngắn gọn hơn
// function createLogger(namespace) {
//   function logger(messge) {
//     console.log(`[${namespace}] ${messge}`);
//   }

//   return logger;
// }

// //============ App ==============

// // Register
// const infoLogger = createLogger("Info");

// infoLogger("Bắt đầu gửi mail");
// infoLogger("Gửi mail lỗi lần 1, thử gửi lại...");
// infoLogger("Gửi mail thành công cho user xx");

// // ForgotPassword
// const errorLgger = createLogger("Error");

// errorLgger("Email");
// errorLgger("Gửi mail lỗi lần 1, thử gửi lại...");
// errorLgger("Gửi mail thành công cho user xx");

function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) || {};

  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };

  const storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
      save();
    },
    remove(key) {
      delete store[key];
      save();
    },
  };

  return storage;
}
//Profile
const profileSetting = createStorage("profile_setting");

console.log(profileSetting.get("fullName", "Viet Kieu"));

profileSetting.set("fullName", "Viet Kieu");
profileSetting.set("age", 36);
profileSetting.set("address", "Ha noi");
