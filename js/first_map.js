let map = L.map('mapid').setView([26.279004, -79.931095], 8.72);

L.tileLayer('https://api.mapbox.com/styles/v1/cos1999/cki9c74ob3zy319pc3y5zdc0a/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY29zMTk5OSIsImEiOiJja2k5YzZob24wZWlrMnlwZDIwZHA2eW80In0.ZFj69ISkxZjk6hPTJsYA-w', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(map);


let marker1 = L.marker([26.650310, -80.236850]).addTo(map);
marker1.bindPopup("<b>Sushi Motto</b> <br> Asian food");

let marker2 = L.marker([26.463289, -80.073441]).addTo(map);
marker2.bindPopup("<b>Dada</b> <br> American food");

let marker3 = L.marker([25.807300, -80.193390]).addTo(map);
marker3.bindPopup("<b>SUGARCANE Raw Bar Grill</b> <br> Seafood");

let marker4 = L.marker([26.312140, -80.077700]).addTo(map);
marker4.bindPopup("<b>Oceans 234</b> <br> Seafood");
