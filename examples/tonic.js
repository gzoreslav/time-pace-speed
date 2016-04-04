/*eslint-disable no-console */

var tps = require("time-pace-speed");

/* GENERAL EXAMPLE */
var i = tps.interval(21.6, '01:13:45.120');
var speed = i.speed_km_per_hour();
var pace = i.pace_per_km('mm:ss.SSS');
console.log('User run distance of 21.6km in 01:13:45.120');
console.log(`speed ${speed} km/h, pace ${pace}`);

/* DISTANCES */
var d1 = tps.dist(1);
console.log(`1 km = ${d1.km()} km`);
console.log(`1 km = ${d1.m()} m`);
console.log(`1 km = ${d1.miles()} miles`);

var d2 = tps.dist(1, 'mile');
console.log(`1 mile = ${d2.km()} km`);

/* TIMES */
console.log(tps.time('01:13:45.120').format());
console.log(tps.time('00:13:45.000').format('mm:ss'));
console.log(tps.time('13:45', 'ss:mm').format('HH:mm:ss'));

/*eslint-enable no-console */
