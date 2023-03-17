function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumToo(n) {
  if (n <= 1) {
    return n;
  } else {
    return n + sumToo(n - 1);
  }
}

function sumTooo(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumTo(2));
console.log(sumToo(5));
console.log(sumTooo(8));

//

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(77));

// 

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}


function printListR(list) {
  console.log(list.value); // выводим текущий элемент

  if (list.next) {
    printList(list.next); // делаем то же самое для остальной части списка
  }

}

function printRevList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log( arr[i] );
  }
}


function printRevList(list) {
  if (list.next) {
    printRevList(list.next);
  }
  
  console.log(list.value);
}

