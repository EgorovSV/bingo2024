function runLotto() {
  var body = document.getElementsByTagName("body")[0];
  var table = document.createElement("table");
  table.style.width = "100%";
  table.setAttribute("border", "0");
  var tbdy = document.createElement("tbody");

  for (var i = 0; i < 2; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < 2; j++) {
      var td = document.createElement("td");
      td.appendChild(createTabel());
      tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
  body.appendChild(table);
  table.appendChild(tbdy);

  var watermark = document.createElement("a");
  watermark.href = "https://github.com/EgorovSV";
  watermark.target = "_blank";
  watermark.appendChild(document.createTextNode("egorovSV"));
  var div = document.createElement("div");
  div.appendChild(watermark);
  body.appendChild(div);
}

function createTabel() {
  const header = ["B", "I", "N", "G", "O"];
  var table = document.createElement("table");
  var tbdy = document.createElement("tbody");

  const numbers = [];
  for (var i = 0; i < 6; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < 5; j++) {
      if (i == 0) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(header[j]));
        tr.appendChild(th);
      } else {
        var td = document.createElement("td");
        do {
          var number = Math.ceil(Math.random() * 14) + 15 * j + 1;
        } while (numbers.indexOf(number) != -1);
        td.appendChild(document.createTextNode(number));
        numbers.push(number);
        tr.appendChild(td);
      }
    }
    tbdy.appendChild(tr);
  }
  table.appendChild(tbdy);
  return table;
}
