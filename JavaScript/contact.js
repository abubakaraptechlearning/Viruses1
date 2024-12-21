// submit button java script contact form//////
document.getElementById("loginButton").addEventListener("click", function () {
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const emailRegex = /^[^@]+@vertex\.com$/; // Email validation for @vertex.com
  
    // If name field is empty
    if (!name) {
      alert("Please fill the name field.");
    }
    // If email field is empty
    else if (!email) {
      alert("Please fill the email field.");
    }
    // If email doesn't match the required format
    else if (!emailRegex.test(email)) {
      alert("Email must include '@vertex.com'.");
    }
    else {
      // If everything is correct, show the Bootstrap modal
      const modal = new bootstrap.Modal(document.getElementById('myModal'));
      modal.show();
    }
  });
// geo location starts/////
var opt = {
    enableHighAccuracy: true,
    maximumAge: 50000,
    timeout: 60000
};
//  Get Location and Error Handling
function getlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, errorHandler, opt)

    } else {
        alert('geolocation is not supported in this browser')
    }
    function errorHandler(error) {

        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert('You Have Denied Access')
                break;
            case error.POSITION_UNAVAILABLE:
                alert('There was a Problem getting your position')
                break;
            case error.TIME_OUT:
                alert('The Application Timeout attempting to get your position')
                break;
            default:
                break;
        }
    }
}
function showPosition(position) {
    var lati = position.coords.latitude
    var long = position.coords.longitude
    alert(lati + '\n'+ long)
    var num = new google.maps.LatLng(24.939042482102654, 67.04537714938814)
    
    var myOptions = {
        zoom: 50,
        center: num,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    var mymap = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
    var marker = new google.maps.Marker(
        {
            position:num,
            map: mymap,
            title:"Viruses"
        }
    );
} 
// geo location ends //////

  