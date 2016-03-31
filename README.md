# time-pace-speed
Simple library for competitions result calculation - time, pace, speed, etc. Also is good for time formatting, add times, substract times, etc.

## Welcome

Package is in development state. Feel free to open pull request and/or propouse new features, bug-fixing, etc. It's under MIT license.

## Installation

    $ npm install time-pace-speed
 
## How to use?

```js
import tps from 'time-pace-speed';
```


#### DISTANCE

```js
// Init
tps.dist(1, 'km'); // [tpsDist Object] dist = 1km
tps.dist(1000);    // [tpsDist Object] dist = 1000m

// Convert
var d = tps.dist(1000);
d.km();    // -> 1
d.m();     // -> 1000
d.miles(); // -> 0.621371192237334

// Add / Substract
tps.dist(1, 'km').add(1).km();      // -> 1.001 (1km + 1m = 1.001km)
tps.dist(1, 'km').substract(1).m(); // -> 999   (1km - 1m = 999m)
```

#### DURATION (TIME)

```js
// Init
tps.time('01:13:45.120');   // [tpsTime Object]
tps.time('13:45', 'mm:ss'); // [tpsTime Object]

// As Moment
tps.time('01:13:45.120').asMoment(); // [Moment Object]

// Format
tps.time('01:13:45.120').format();             // -> 01:13:45.120
tps.time('00:13:45.000').format('mm:ss');      // -> 13:45
tps.time('13:45', 'mm:ss').format('HH:mm:ss'); // -> 00:13:45

// Convert 
var t = tps.time('01:13:45.120');
t.milliseconds(); // -> 4425120
t.seconds();      // -> 4425.12
t.minutes();      // -> 73.752
t.hours();        // -> 1.2291999999999998

// Add / Subsract
tps.time('01:13:45.120').add('01:00:00.000').add('01.00.00.999').format(); // -> 03:13:46.119
tps.time('01:13:45.120').substract('01:00:00.100').format();               // -> 00:13:45:020
```

#### INTERVAL

```js
// Init
tps.interval(21600, '01:13:45.120');        // [tpsInterval Object]
tps.interval(21.6, '01:13', 'km', 'HH:mm'); // [tpsInterval Object]

// Calculate Speed
var i = tps.interval(21600, '01:13:45.120');
i.speed.km_h(); // -> 17.572404816140583
i.speed.mph();  // -> 10.91898613108234

// Calculate Pace
var i = tps.interval(21600, '01:13:45.120');
i.pace.per_km().format();            // -> 00:03:24.866
i.pace.per_km().format('mm:ss.SSS'); // -> 03:24.866

```

[TODO]

Add description for all classes

