document.body.firstElementChild
// или
document.body.children[0]
// или (первый узел пробел, поэтому выбираем второй)
document.body.childNodes[1]


document.body.lastElementChild
// или
document.body.children[1]


// получаем <ul>, и его последнего ребёнка
document.body.lastElementChild.lastElementChild

/*

Да. Верно. Элемент elem.lastChild всегда последний, у него нет ссылки nextSibling.
Нет. Неверно. Потому что elem.children[0] – потомок-элемент. Но перед ним могут быть другие узлы. Например, previousSibling может быть текстовым узлом.

*/


let table = document.body.firstElementChild;

    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      row.cells[i].style.backgroundColor = 'red';
    }