document.getElementById('button').addEventListener('click', loadUsers);
  var apikey = "AIzaSyAiUT_1AVlmUGBLkKMdLi01TiR9BsuQXNU";
  var lmt = 12;
  var clientkey = "tenor";
function loadUsers(){
  // remove the old search
  $("img").remove();
 let search = $("#search").val();
var url= "https://tenor.googleapis.com/v2/search?q=" + search + "&key=" +
  apikey +"&client_key=" + clientkey +  "&limit=" + lmt;
var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let myArr = JSON.parse(this.responseText);

        for (let i = 0; i < myArr["results"].length; i++) {
          var src = myArr["results"][i]["media_formats"].gif.url;
          $("#user").append("<img src=" + src + ">"); 
        
        }
        console.log("ready")
        
      }
  };
  xhttp.open("GET",url , true);
  xhttp.send();
}
