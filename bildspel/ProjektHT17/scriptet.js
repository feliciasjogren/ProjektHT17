function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
} 

function initMap() {
        var location = {lat: 59.254276, lng: 15.24923};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: location

        });

       var marker = new google.maps.Marker({
       	position: location,
       	map: map
       });
       
      }


      