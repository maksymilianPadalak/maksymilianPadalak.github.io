// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 52.403124, lng: 16.9099901 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: uluru,
    disableDefaultUI: true,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: 'google-maps/placeholder-filled-point.png'
  });
}