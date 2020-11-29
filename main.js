// Place your access token here or in environment variable
mapboxgl.accessToken =
	"pk.eyJ1IjoibWFyY2FzZWxsa2hlbGFpZmkiLCJhIjoiY2tobWEzN2dmMDZvNDJ4bTN3bW1veHJociJ9.WXR94CHzjEJviVAOIlJwug";

// Get current location under your permission
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
	enableHighAccuracy: true,
});

function successLocation(position) {
	setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
	// Longitude & Latitude of Manchester
	setupMap([-2.24, 53.48]);
}

function setupMap(center) {
	const map = new mapboxgl.Map({
		container: "map",
		style: "mapbox://styles/mapbox/streets-v11",
		center: center,
		zoom: 15,
	});

	const nav = new mapboxgl.NavigationControl();
	map.addControl(nav);

	var directions = new MapboxDirections({
		accessToken: mapboxgl.accessToken,
	});

	map.addControl(directions, "top-left");
}
