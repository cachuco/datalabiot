var gpx2js = require('gpx2js');
var mqtt = require('mqtt');
var client  = mqtt.connect(process.env.MQTT_BROKER);

client.on('connect', function () {
    gpx2js.convert('./demo.gpx', function(rv) {
        //console.log(JSON.stringify(rv, null, 4));
        var points = [];
        for (var index in rv.tracks[0].segments[0].points)
        {
          var point = rv.tracks[0].segments[0].points[index];
          var telemetry = {
            latitude: parseFloat(point.lat),
            longitude: parseFloat(point.lon),
            elevation: parseFloat(point.ele),
            id: process.env.DEVICEID
          }
          points.push(point);
          var send_tb = function(telemetry) {
            console.log("Sending telemetry: ", telemetry);
            client.publish("v1.devices.location", JSON.stringify(telemetry));
          }
          setTimeout(send_tb, 1000*index, telemetry);
        }
      });
});
