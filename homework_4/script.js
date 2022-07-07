// Задание 1

function bindFunc(funcSome, context, ...rest) {


   return function () {
      funcSome.apply(context, rest)
   }
}

function helloWorld(a, b, c, d) {
   console.log(this.name)
   console.log(a, b, c, d)
}
bindFunc(helloWorld, { name: "Sergey" }, 68, true, 12, "lala")();


// Задание 2

Object.prototype.func = function () {
   let sum = 0, arrVal = Object.values(this);
   arrVal.forEach(function (item) {
      sum += item;
   });
   console.log({ sum });
}

const objectA = {
   a: 1,
   b: 2,
   c: 3,
}

objectA.func();


// Задание 3

function getNewArray() {
   if (this.values) {
      return this.values.filter(el => el % 2 == 0 && el > 2 && el < 10);
   }
   else {
      console.log("Не найдено");
   }
};

const valObject0 = {
   values: [1, '2', 4, 8, '8', 3, 10, null, false],
};
const resultThree = getNewArray.call(valObject0);
console.log(resultThree)

// Задание 4

const citiesAndCountries = {
   'Киев': 'Украина',
   'Нью-Йорк': 'США',
   'Амстердам': 'Нидерланды',
   'Берлин': 'Германия',
   'Париж': 'Франция',
   'Лиссабон': 'Португалия',
   'Вена': 'Австрия',
};

const getCity = function () {
   let intoArr = [];
   for (const [key, value] of Object.entries(this)) {
      intoArr += `${key} - ${value},`;
   }
   console.log(intoArr);
   intoArr = intoArr.split(',');
   console.log(intoArr);
};

const ret = getCity.call(citiesAndCountries);

// Задание 5

const namesOfDays = {
   ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
   en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturady', 'Sunday'],
};

function getNameOfDay(lang, datNumber) {
   if (lang == 'ru') {
      console.log(namesOfDays[lang][datNumber - 1]);
   }
   else if (lang == 'en') {
      console.log(namesOfDays[lang][datNumber - 1]);
   };
};

getNameOfDay('ru', 1);
getNameOfDay('en', 1);

// Задание 6

const person = {
   name: 'Sergey'
};

const person1 = {
   age: 23
};

function setProto(currentObj, protoObj) {
   currentObj.proto = protoObj;
}

setProto(person1, person);
console.log(person1);