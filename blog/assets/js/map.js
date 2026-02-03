// Initialize the map
const map = L.map('lycian-way-map').setView([36.5, 29.5], 10); // Centered on Lycian Way area

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Array to store markers and content
let markersData = [];

// Sample route for Lycian Way (approximate coordinates)
const lycianWayRoute = [
    [36.2092, 28.8316], // Start near Fethiye
    [36.2467, 28.9772], // Olympos
    [36.3049, 29.1245], // Phaselis
    [36.3544, 29.2728], // Cirali
    [36.4018, 29.4201], // Kas
    [36.4512, 29.5674], // Kalkan
    [36.5026, 29.7147], // Demre
    [36.5530, 29.8620], // Finike
    [36.6044, 30.0093], // Kumluca
    [36.6558, 30.1566], // Side (end)
];

// Draw the Lycian Way route on the map
const routePolyline = L.polyline(lycianWayRoute, {color: '#ff7800', weight: 4}).addTo(map);

// Fit the map to show the entire route
map.fitBounds(routePolyline.getBounds());

// Function to add a marker to the map
function addMarker(lat, lng, title, description, imageUrl) {
    let markerContent = `<b>${title}</b>`;
    if (description) {
        markerContent += `<br><p>${description}</p>`;
    }
    if (imageUrl) {
        markerContent += `<br><img src="${imageUrl}" alt="${title}" style="max-width: 100%; height: auto;">`;
    }

    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(markerContent);

    // Store marker data
    markersData.push({
        lat: lat,
        lng: lng,
        title: title,
        description: description,
        imageUrl: imageUrl,
        marker: marker
    });

    return marker;
}

// Add some sample markers to demonstrate functionality
addMarker(36.2467, 28.9772, "Olympos Beach", "Beautiful beach with ancient ruins nearby", null);
addMarker(36.3049, 29.1245, "Phaselis Ruins", "Ancient Lycian city with three harbors", null);
addMarker(36.4018, 29.4201, "Kas Harbor", "Charming harbor town along the Lycian Way", null);