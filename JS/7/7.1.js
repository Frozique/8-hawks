// true, берётся из rabbit.
// null, берётся из animal.
// undefined, такого свойства больше нет.

let head = {
glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

alert( pockets.pen ); // 3
alert( bed.glasses ); // 1
alert( table.money ); // undefined

// rabbit.

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: []
  };
  
  // Шустрый хомяк нашёл еду
  speedy.eat("apple");
  alert( speedy.stomach ); // apple
  
  // Живот ленивого хомяка пуст
  alert( lazy.stomach ); // <ничего>