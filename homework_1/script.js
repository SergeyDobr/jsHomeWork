const nameUser = "tretre";
typeof nameUser == "string" ? console.log("Привет, " + nameUser) : console.log("Ошибка, не тот тип данных");


console.log("================");

console.log(typeof 1);
console.log(typeof "Hello");
console.log(typeof true);
let user;
console.log(typeof user);
let userData = {
   age: 23,
   country: "Ukraine",
};
console.log(typeof userData);


user = null;
console.log(typeof user, user);