// будет выведено 0,1

// alert( counter.up() ); // 1
// alert( counter.up() ); // 2
// alert( counter.down() ); // 1

// ошибка

function sum(a) {
  return function (b) {
    return a + b; // берёт "a" из внешнего лексического окружения
  };
}

console.log(sum(1)(2));

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return (item) => item >= a && item <= b;
}

function inArray(array) {
  return (item) => array.includes(item);
}

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
console.log(users);
users.sort(byField("age"));
console.log(users);

function makeArmy() {

    let shooters = [];
  
    for(let i = 0; i < 10; i++) {
      let shooter = function() { // функция shooter
        console.log( i ); // должна выводить порядковый номер
      };
      shooters.push(shooter);
  
  
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // 0
  army[5](); // 5