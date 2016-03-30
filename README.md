# time-pace-speed
Simple calculation of duration, speed, pace and other values for sport competitions

## Installation

    $ npm install time-pace-speed
 
## How to use?

```js
import tps from 'time-pace-speed';

/* DISTANCE */

/*
Init distance
*/
var d = tps.dist(1);
d.km();    // -> 1
d.m();     // -> 1000
d.miles(); // -> 0.621371192237334

/*
Add distances
*/
tps.dist(1).add(1, 'm').km(); // -> 1km + 1m = 1.001

/* TIME */

/*
Init time durations
*/
tps.time('01:13:45.120').format();             // -> 01:13:45.120
tps.time('00:13:45.000').format('mm:ss');      // -> 13:45
tps.time('13:45', 'ss:mm').format('HH:mm:ss'); // -> 13:45

/*
Calculate 
*/
tps.time('01:13:45.120').milliseconds(); // -> 4425120
tps.time('01:13:45.120').seconds();      // -> 4425.12
tps.time('01:13:45.120').minutes();      // -> 73.752
tps.time('01:13:45.120').hours();        // -> 1.2291999999999998

/*
Add time durations
*/
tps.time('01:13:45.120').add('01:00:00.000').add('01.00.00.999').format(); // -> 03:13:46.119

/* INTERVAL */

/*
Init interval
*/
var i = sportTime.interval(21.6, '01:13:45.120');
i.speed_km_per_hour();      // -> 17.572404816140583
i.pace_per_km();            // -> 00:03:24.866
i.pace_per_km('mm:ss.SSS'); // -> 03:24.866

```
