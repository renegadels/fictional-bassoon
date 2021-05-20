 var map;
 var poly = [];
 var decorator;
 var line;
 var center = new L.LatLng(28.549948, 77.268241);
 var interval = 0;

 var coord1 = [parseFloat(document.currentScript.getAttribute('one')), parseFloat(document.currentScript.getAttribute('two'))]
 var coord2 = [parseFloat(document.currentScript.getAttribute('three')), parseFloat(document.currentScript.getAttribute('four'))]

 var pp = [
   coord1,
   coord2
 ];
 window.onload = function() {

   map = new MapmyIndia.Map('map', {
     center: center,
     editable: true,
     zoomControl: true,
     hybrid: true
   });

   //draw polyline
   drawCarMarkerOnPolyline();
 }

 $(".carPolyLine").click(function() {

 });

 function drawCarMarkerOnPolyline() {
   removePolyline();
   var offset = 0; //intial offset value
   var w = 14,
     h = 33;
   //Polyline css
   var linecss = {
     color: '#234FB6',
     weight: 3,
     opacity: 1
   };
   line = L.polyline(pp, linecss).addTo(map); //add polyline on map
   decorator = L.polylineDecorator(line).addTo(map); //create a polyline decorator instance.

   //offset and repeat can be each defined as a number,in pixels,or in percentage of the line's length,as a string 
   interval = window.setInterval(function() {
     decorator.setPatterns([{
       offset: offset + '%', //Offset value for first pattern symbol,from the start point of the line. Default is 0.
       repeat: 0, //repeat pattern at every x offset. 0 means no repeat.
       //Symbol type.
       symbol: L.Symbol.marker({
         rotate: true, //move marker along the line. false value may cause the custom marker to shift away from a curved polyline. Default is false. 
         markerOptions: {
           icon: L.icon({
             iconUrl: 'http://www.mapmyindia.com/api/advanced-maps/doc/sample/images/car.png',
             iconAnchor: [w / 2, h / 2], //Handles the marker anchor point. For a correct anchor point [ImageWidth/2,ImageHeight/2]
             iconSize: [14, 33]
           })
         }
       })
     }]);
     if ((offset += 0.03) > 100) //Sets offset. Smaller the value smoother the movement.
       offset = 0;
   }, 10); //Time in ms. Increases/decreases the speed of the marker movement on decrement/increment of 1 respectively. values should not be less than 1.
   poly.push(line);
   poly.push(decorator);
   map.fitBounds(line.getBounds());

 }
 $(".drawArrowOnPolyline").click(function() {
   removePolyline();
   var offset = 0; //intial offset value

   //Polyline css
   var linecss = {
     color: '#fd4000',
     weight: 3,
     opacity: 1
   };
   line = L.polyline(pp, linecss).addTo(map); //add polyline on map
   decorator = L.polylineDecorator(line).addTo(map); //create a polyline decorator instance.
   //offset and repeat can be each defined as a number,in pixels,or in percentage of the line's length,as a string 
   interval = window.setInterval(function() {
     decorator.setPatterns([{
       offset: offset + "%", //Start first marker from x offset.
       repeat: 0, //repeat market at every x offset. 0 means no repeat.
       symbol: L.Symbol.arrowHead({
         pixelSize: 20, //Size of arrow image
         headAngle: 60, //Increases/decreases arrow angel. Default is 60.
         polygon: true, //if set to false an arrow is added else a triangle shape arrow is added. Default is true.
         pathOptions: {
           color: '#303030', //arrow color
           fillOpacity: 0, //0 for no fill
           weight: 4 // arrow line width
         }
       })
     }]);
     if ((offset += 0.03) > 100) //Sets offset. Smaller the value smoother the movement.
       offset = 0;
   }, 10); //Time in ms. Increases/decreases the speed of the marker movement on decrement/increment of 1 respectively. values should not be less than 1.
   poly.push(line);
   poly.push(decorator);
   map.fitBounds(line.getBounds());
 });
 $(".drawRepeatedPatternOnPolyline").click(function() {
   removePolyline();
   var offset = 0; //intial offset value

   //Polyline css
   var linecss = {
     color: '#fd4000',
     weight: 3,
     opacity: 1
   };
   line = L.polyline(pp, linecss).addTo(map); //add polyline on map
   decorator = L.polylineDecorator(line).addTo(map); //create a polyline decorator instance.
   //offset and repeat can be each defined as a number,in pixels,or in percentage of the line's length,as a string 
   interval = window.setInterval(function() {
     decorator.setPatterns([{
       offset: offset + "%", //Start first marker from x offset.
       repeat: 100, //repeat market at every 100 offset.
       symbol: L.Symbol.arrowHead({
         pixelSize: 20, //Size of arrow image
         headAngle: 60, //Increases/decreases arrow angel. Default is 60.
         polygon: true, //if set to false an arrow is added else a triangle shape arrow is added. Default is true.
         pathOptions: {
           color: '#303030', //arrow color
           fillOpacity: 0, //0 for no fill
           weight: 4 // arrow line width
         }
       })
     }]);
     if ((offset += 0.03) > 100) //Sets offset. Smaller the value smoother the movement.
       offset = 0;
   }, 10); //Time in ms. Increases/decreases the speed of the marker movement on decrement/increment of 1 respectively. values should not be less than 1.
   poly.push(line);
   poly.push(decorator);
   map.fitBounds(line.getBounds());
 });


 $(".removePolyline").click(function() {
   removePolyline();
 });

 function removePolyline() {
   var polylength = poly.length;
   if (polylength > 0) {
     for (var i = 0; i < polylength; i++) {
       if (poly[i] !== undefined) {
         map.removeLayer(poly[i]);
       }
     }
     poly = new Array();
     window.clearInterval(interval);
   }

 }

