function add() {
  var arr = [];
  var task = {
    // document.write(typeof(arr));
    disc: document.getElementById("description").value,
    marked: document.getElementById("mark").value,
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
      todo +=
        '<input type="checkbox" id="mark" onchange="completed('+i+')"></input>' +
        data[i].disc +
        '<button onclick="del(' +
        i +
        ')">delete</button><br>';
    }
  } else {
    todo = "No items found.";
  }

  document.getElementById("list").innerHTML = todo;
}
function completed(i){
    var data = localStorage.getItem("mydata");
    data = JSON.parse(data);
    data[i].marked=false;
    localStorage.setItem("mydata", JSON.stringify(data));
    
}
