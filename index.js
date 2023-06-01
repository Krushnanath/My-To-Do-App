function add() {
  var arr = [];
  var task = {
    // document.write(typeof(arr));
    disc: document.getElementById("description").value,
    marked: "unchecked",
  };

  var data = localStorage.getItem("mydata");

  if (data) {
    data = JSON.parse(data);
    arr = arr.concat(data);
    arr.push(task);
    // document.write("iff");
  } else {
    arr.push(task);
  }

  localStorage.setItem("mydata", JSON.stringify(arr));
  //data = localStorage.getItem('mydata');

  // document.write(data.length, "<br>");

  //for(i=0;i<data.length;i++){
  // console.log('arr---', document.write(arr[i]));
  //document.write(data);
  // document.write(data[i], "<br>")
  // }
  /* var todo ="";
    for(i=0;i<data.length;i++){
       // document.write(i,'<br>');
        todo +=data[i]+ '<button onclick="del(\''+i+'\')">delete</button><br>';
    }*/
  display();
}
function del(i) {
  var a = i;
  var arr = [];
  var data = localStorage.getItem("mydata");
  data = JSON.parse(data);
  data.splice(a, 1);
  arr = arr.concat(data);
  localStorage.setItem("mydata", JSON.stringify(arr));
  display();
}
function display() {
  var todo = "";
  var data = localStorage.getItem("mydata");

  if (data) {
    data = JSON.parse(data);
    if (data[0] == null) {
      todo = "No items found.";
    }
    for (var i = 0; i < data.length; i++) {
      if (data[i].marked == "checked") {
        todo +=
          '<div class="item" >' +
          '<input type="checkbox" id="mark" onchange="completed(' +
          i +
          ')" ' +
          data[i].marked +
          "></input>" +
          '<label for="mark" id="completed">' +
          data[i].disc +
          "</label>" +
          '<button onclick="del(' +
          i +
          ')">delete</button>' +
          "</div>";
      } else {
        todo +=
          '<div class="item">' +
          '<input type="checkbox" id="mark" onchange="completed(' +
          i +
          ')" ' +
          data[i].marked +
          "></input>" +
          "<label>" +
          data[i].disc +
          "</label>" +
          '<button onclick="del(' +
          i +
          ')">delete</button>' +
          "</div>";
      }
    }
  } else {
    todo = "No items found.";
  }

  document.getElementById("list").innerHTML = todo;
}
function completed(i) {
  var data = localStorage.getItem("mydata");
  data = JSON.parse(data);
  data[i].marked = "checked";
  localStorage.setItem("mydata", JSON.stringify(data));
  display();
}
