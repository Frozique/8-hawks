//  оба работают одинаково

  function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }

//   

function min(a, b) {
    return a < b ? a : b;
  }

//   

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }