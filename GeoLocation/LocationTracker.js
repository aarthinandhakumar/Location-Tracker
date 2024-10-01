(function() {
let startButton;
let map;
let currentPositionMarker;
let originalPositionMarker;
let pathCoordinates = [];
let watchID;
let latitude, longitude;
let updateCounter = 0;
// Initialize and set event handler
window.onload = init;
function init() {
startButton = document.getElementById("startButton");
startButton.onclick = startTrackingLocation;
}
// Start tracking the location
function startTrackingLocation() {
// Disable the start button after the initial click
startButton.disabled = true;
// Use the Geolocation API to get the current position
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayInitialLocation, showError);
} else {
    alert("Geolocation is not supported by this browser.");
}
}
// Display initial location and set up map
function displayInitialLocation(position) {
latitude = position.coords.latitude;
longitude = position.coords.longitude;
// Update HTML to show initial latitude and longitude
document.getElementById("latitude").innerText = `Start Latitude: ${latitude}`;
document.getElementById("longitude").innerText = `Start Longitude: ${longitude}`;
document.getElementById("currentLatitude").innerText = `Current Latitude: ${latitude}`;
document.getElementById("currentLongitude").innerText = `Current Longitude: ${longitude}`;
// Initialize Google Map
initMap(latitude, longitude);
// Start updating the location every 5 seconds
setInterval(updateMyLocation, 5000);
}
// Initialize Google Map centered at the current location
function initMap(lat, lon) {
const initialLocation = { lat: lat, lng: lon };
map = new google.maps.Map(document.getElementById("map"), {
    center: initialLocation,
    zoom: 15
});
// Create the marker for the initial position
originalPositionMarker = new google.maps.Marker({
position: initialLocation,
map: map,
title: "Bird's initial location" // Title for the initial marker
});
// Create the marker for the current position
currentPositionMarker = new google.maps.Marker({
    position: initialLocation,
    map: map,
    title: "Bird's current location"
});
// Store the initial coordinates in the path array
pathCoordinates.push(initialLocation);
}
// Simulate the bird's movement and update the location
function updateMyLocation() {
// Generate random values for latitude and longitude
const deltaLat = Math.random() / 100;
const deltaLon = Math.random() / 100;
// Update the current latitude and longitude (NorthWest movement)
latitude += deltaLat;
longitude -= deltaLon;
// Update the displayed values
document.getElementById("counter").innerText = `Update#: ${++updateCounter}`;
document.getElementById("currentLatitude").innerText = `Current Latitude: ${latitude}`;
document.getElementById("currentLongitude").innerText = `Current Longitude: ${longitude}`;
// Update the Google Map
const newPosition = { lat: latitude, lng: longitude };
currentPositionMarker.setPosition(newPosition);
map.setCenter(new google.maps.LatLng(latitude, longitude));
// Add the new position to the path
pathCoordinates.push(newPosition);
// Draw the path
drawPath();
}
// Draw the path of the bird on the Google Map
function drawPath() {
const path = new google.maps.Polyline({
    path: pathCoordinates,
    geodesic: true,
    strokeColor: '#0039a6',
    strokeOpacity: 1.0,
    strokeWeight: 2
});
path.setMap(map);
}
// Handle geolocation errors
function showError(error) {
switch (error.code) {
    case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
    case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
    case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
    case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
}
}
})();