function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.set = function (number) {
    return (counter.count = number);
  };

  counter.decrease = function () {
    return counter.count--;
  };

  counter.count = 0;

  return counter;
  // ... ваш код ...
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 11)


function sum(a) {

    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
  }

  function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  // использование:
  printNumbers(5, 10);

  function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
      alert(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
  }
  
  // использование:
  printNumbers(5, 10);

  let i = 0;

setTimeout(() => alert(i), 100); // 100000000

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}