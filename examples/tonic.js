var tps = require("time-pace-speed");

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
