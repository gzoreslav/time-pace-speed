/*eslint-disable no-console */

var tps = require("time-pace-speed");

/* GENERAL EXAMPLE */
var i = tps.interval(21600, '01:13:45.120');
var speed = i.speed.km_h();
var pace = i.pace.per_km().format('mm:ss.SSS');
console.log(`User run ${i.dist.km()} in ${i.time.format()}`);
console.log(`speed ${speed} km/h, pace ${pace}`);

/* DISTANCES */
var d1 = tps.dist(1, 'km');
console.log(`1 km = ${d1.km()} km`);
console.log(`1 km = ${d1.m()} m`);
console.log(`1 km = ${d1.miles()} miles`);
var d2 = tps.dist(1, 'mile');
console.log(`1 mile = ${d2.km()} km`);

/* DURATION (TIME) */
console.log(tps.time('01:13:45.120').format());
console.log(tps.time('00:13:45.000').format('mm:ss'));
console.log(tps.time('13:45', 'ss:mm').format('HH:mm:ss'));

/*eslint-enable no-console */
