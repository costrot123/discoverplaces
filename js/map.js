let mymap = L.map('mapid').setView([38.964512, -96.036421], 4.11);

L.tileLayer('https://api.mapbox.com/styles/v1/cos1999/ckiahd1vk53x619obu5p162no/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY29zMTk5OSIsImEiOiJja2k5YzZob24wZWlrMnlwZDIwZHA2eW80In0.ZFj69ISkxZjk6hPTJsYA-w', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);


for ( let i = 0; i < places.length; i++ ) {
  L.marker( [places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>')
  .addTo(mymap);
}
