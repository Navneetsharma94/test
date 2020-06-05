/*function loadXMLDoc() {
  var dataResponse = new XMLHttpRequest();
  dataResponse.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      var datainfo = JSON.parse(dataResponse.responseText);
      console.log(typeof(datainfo));
      myfunction(datainfo);
    }
  };
  dataResponse.open("GET" , "https://reqres.in/api/users" , true);
  dataResponse.send(); 

}*/

function loadXMLDoc() {
  $.ajax({ 
    type: "GET",
    url: "https://reqres.in/api/users",
    dataType: "json" ,
    success: function (datainfo) {
      console.log(datainfo.data);
      localStorage.setItem("values", JSON.stringify(datainfo.data));
      var x = JSON.parse(localStorage.getItem("values"));
      var trhtml = "" ;
      for (var i = 0; i < x.length; i++) {
        var check=0;
        trhtml += '<tr id="first"><td >'
          + x[i].id
          + '</td><td>'
          + x[i].email
          + '</td><td>'
          + x[i].first_name
          + '</td><td>'
          + x[i].last_name
          + '</td><td><img src= "' + x[i].avatar + '" >'
          +'</td><td><input type="checkbox" name="id[]" class="toedit" value="' +check++ + '">' 
          + '</td><td><button type="submit" id="clickme" class="reset"   > RESET ROW  </button>'
          + '</td></tr>';
      }
      console.log(check);
      $('#tbody').append(trhtml);

      
      $("button").click(function () {
        var button =document.getElementById("clickme"); 
        var count = 0;
        
        button.onclick = function (){
          count +=1;
          var items =JSON.parse( localStorage.getItem("values"));
          var jugad = items.slice(count,7);
          localStorage.setItem("values", JSON.stringify(jugad));
          console.log(count);
          document.getElementById("demo").deleteRow(count);
        }
      }); 
    }
  });

} 






function loadXMLDoc() {
  $.ajax({
    type: "GET",
    url: "https://reqres.in/api/users",
    dataType: "json",
    success: function (datainfo) {
      console.log(datainfo.data);
      localStorage.setItem("values", JSON.stringify(datainfo.data));
      var x = JSON.parse(localStorage.getItem("values"));
      var trhtml = "";
      for (var i = 0; i < x.length; i++) {
        var check = 0;
        trhtml += '<tr id="row_' + i + '"><td >'
          + x[i].id
          + '</td><td>'
          + x[i].email
          + '</td><td>'
          + x[i].first_name
          + '</td><td>'
          + x[i].last_name
          + '</td><td><img src= "' + x[i].avatar + '" >'
          + '</td><td><input type="checkbox" name="id[]" class="toedit" value="' + check++ + '">'
          + '</td><td><button type="submit" id="clickme" class="reset"   onclick="deleteRow(' + i + ')"> DELETE ROW </button>'
          + '</td></tr>';
      }



      console.log(check);
      $('#tbody').append(trhtml);


      // $("button").click(function () {
      //   var button = document.getElementById("clickme");
      //   var count = 0;

      //   button.onclick = function () {
      //     count += 1;
      //     var items = JSON.parse(localStorage.getItem("values"));
      //     var jugad = items.slice(count, 7);
      //     localStorage.setItem("values", JSON.stringify(jugad));
      //     console.log(count);
      //     document.getElementById("demo").deleteRow(count);
      //   }
      // });
    }
  });

}

function deleteRow(i) {
  var items = JSON.parse(localStorage.getItem('values'));
  delete items[i];
  localStorage.setItem('values', JSON.stringify(items));
  $("#row_" + i).remove();
}