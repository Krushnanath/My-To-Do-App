function add(){
    var arr=[];
   // document.write(typeof(arr));
    var disc = document.getElementById('description').value;
    var data= localStorage.getItem('mydata');
    
    if(data){
        data = JSON.parse(data);
        arr= arr.concat(data);
        arr.push(disc);
       // document.write("iff");
    }
    else
    {
        arr.push(disc);
    }
    
    localStorage.setItem('mydata', JSON.stringify(arr));
    data = localStorage.getItem('mydata');
    data = JSON.parse(data);
   // document.write(data.length, "<br>");
    
    //for(i=0;i<data.length;i++){
        // console.log('arr---', document.write(arr[i]));
        //document.write(data);
   // document.write(data[i], "<br>")
   // }
    var todo ="";
    for(i=0;i<data.length;i++){
       // document.write(i,'<br>');
        todo +=data[i]+ '<button>delete</button><br>';
    }
    document.getElementById('list').innerHTML=todo;

}
