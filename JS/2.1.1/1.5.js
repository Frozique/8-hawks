for (let li of document.querySelectorAll('li')) {
    // получаем название из текстового узла
    let title = li.firstChild.data;

    title = title.trim(); // удаляем лишние пробелы c конца строки

    // считаем количество потомков
    let count = li.getElementsByTagName('li').length;

    alert(title + ': ' + count);
  }

/*<html>

<body>
  <script>
    alert(document.body.lastChild.nodeType);
  </script>
</body>

</html> */


// BODY

//  document

alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node