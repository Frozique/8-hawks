/* 

<div id="elem1"></div>
<div id="elem2"></div>
<div id="elem3"></div>
<script>
  let text = '<b>текст</b>';

  elem1.append(document.createTextNode(text));
  elem2.innerHTML = text;
  elem3.textContent = text;
</script>

*/

function clear(elem) {
  elem.innerHTML = "";
}

let ul = document.createElement("ul");
document.body.append(ul);

while (true) {
  let data = prompt("Введите текст для элемента списка", "");

  if (!data) {
    break;
  }

  let li = document.createElement("li");
  li.textContent = data;
  ul.append(li);
}

let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

function createTree(container, obj) {
  container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
  // если нет дочерних элементов, то вызов возвращает undefined
  // и элемент <ul> не будет создан
  if (!Object.keys(obj).length) return;

  let ul = document.createElement("ul");

  for (let key in obj) {
    let li = document.createElement("li");
    li.innerHTML = key;

    let childrenUl = createTreeDom(obj[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

  return ul;
}

let container = document.getElementById("container");
createTree(container, data);

let lis = document.getElementsByTagName("li");

for (let li of lis) {
  // получить количество всех <li> ниже этого <li>
  let descendantsCount = li.getElementsByTagName("li").length;
  if (!descendantsCount) continue;

  // добавить непосредственно к текстовому узлу (добавить к тексту)
  li.firstChild.data += " [" + descendantsCount + "]";
}

function createCalendar(elem, year, month) {
  let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
  let d = new Date(year, mon);

  let table =
    "<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>";

  // пробелы для первого ряда
  // с понедельника до первого дня месяца
  // * * * 1  2  3  4
  for (let i = 0; i < getDay(d); i++) {
    table += "<td></td>";
  }

  // <td> ячейки календаря с датами
  while (d.getMonth() == mon) {
    table += "<td>" + d.getDate() + "</td>";

    if (getDay(d) % 7 == 6) {
      // вс, последний день - перевод строки
      table += "</tr><tr>";
    }

    d.setDate(d.getDate() + 1);
  }

  // добить таблицу пустыми ячейками, если нужно
  // 29 30 31 * * * *
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += "<td></td>";
    }
  }

  // закрыть таблицу
  table += "</tr></table>";

  elem.innerHTML = table;
}

function getDay(date) {
  // получить номер дня недели, от 0 (пн) до 6 (вс)
  let day = date.getDay();
  if (day == 0) day = 7; // сделать воскресенье (0) последним днем
  return day - 1;
}

createCalendar(calendar, 2012, 9);


let timerId;

function update() {
  let clock = document.getElementById('clock');
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.children[2].innerHTML = seconds;
}

function clockStart() {
  // устанавить новый интервал только в том случае, если часы остановлены
  // в противном случае мы бы переписали ссылку timerID на интервал выполнения и никогда больше не смогли бы остановить часы
  if (!timerId) {
    timerId = setInterval(update, 1000);
  }
  update(); // <--  начать тут же, не ждать 1 секунду пока первый setInterval сработает
}

function clockStop() {
  clearInterval(timerId);
  timerId = null; // <-- очистить timerID, чтобы указать, что часы были остановлены, чтобы можно было запустить их снова в clockStart()
}

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

let sortedRows = Array.from(table.rows)
.slice(1)
.sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sortedRows);