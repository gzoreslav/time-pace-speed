import moment from 'moment';
import _ from 'lodash';


const format = 'HH:mm:ss.SSS';

const unit = 'km';

const unitsR = {
	'km': 1,
	'm': 0.001,
	'cm': 0.00001,
	'mm': 0.000001,
	'mile': 1.609344
}

const unitsL = {
	'km': 1,
	'm': 1000,
	'cm': 100000,
	'mm': 1000000,
	'mile': 0.621371192237334
}

const utc = (t, f) => {
	return moment.utc(`1970-01-01 ${t}`, `YYYY-MM-DD ${f || format}`);
}

class sportTime {

    constructor(t, f) {
    	if (t && t._isAMomentObject) {
    		this.time = t;
    	} else {
    		if (t) {
    			this.time = utc(t, f || format);
    		} else {
    			this.time = utc('00:00:00.000');
    		}
    	}
    	return this;
    }

    value() {
    	return this.time;
    }

    format(f) {
    	return this.time.format(f || format);
    }

    milliseconds() {
    	return parseInt(this.format('x'));
    }

    seconds() {
    	return this.milliseconds() / 1000;
    }

    minutes() {
		return this.seconds() / 60;
    }

    hours() {
		return this.minutes() / 60;
    }

    subtract(t, f) {
    	t = t._isAMomentObject ? t : utc(t, f);
    	this.time = moment.utc(this.time - t);
    	return this;
    }

    add(t, f) {
    	t = t._isAMomentObject ? t : utc(t, f);
    	this.time = moment.utc(this.time + t);
    	return this;
    }
};

/*    sum(times, f) {
    	let _sum = 0;
    	for (var i = 0; i < times.length; i++) {
    		_sum = _sum + (times[i]._isAMomentObject ? times[i] : utc(times[i], f));
    	}
    	this.time = moment.utc(_sum);
    	return this;
    }

    avg(times, f) {
    	let _sum = 0;
    	for (var i = 0; i < times.length; i++) {
    		_sum = _sum + (times[i]._isAMomentObject ? times[i] : utc(times[i], f));
    	}
    	_sum = _sum / times.length;
    	this.time = moment.utc(_sum);
    	return this;
    }

    min(times, f) {
    	let result = 0;
    	let min = times[0]._isAMomentObject ? times[0] : utc(times[0], f);
    	for (var i = 1; i < times.length; i++) {
    		if (min > (times[i]._isAMomentObject ? times[i] : utc(times[i], f))) {
    			min = times[i]._isAMomentObject ? times[i] : utc(times[i], f);
    			result = i;
    		}
    	}
    	return {
    		index: result,
    		time: time(min, f)
    	};
    }

    max(times, f) {
    	let result = 0;
    	let max = times[0]._isAMomentObject ? times[0] : utc(times[0], f);
    	for (var i = 1; i < times.length; i++) {
    		if (max < (times[i]._isAMomentObject ? times[i] : utc(times[i], f))) {
    			max = times[i]._isAMomentObject ? times[i] : utc(times[i], f);
    			result = i;
    		}
    	}
    	return {
    		index: result,
    		time: time(max, f)
    	};
    }
}*/

export const time = (t, f) => {
	return new sportTime(t, f);
}

class sportDist {

    //km is default for dist 
    constructor(d, f) {
    	this.dist = d * unitsR[f || 'km'];
    	return this;
    }

    value() {
    	return this.dist;
    }

    format(f) {
    	return this.dist * unitsL[f || 'km'];
    }

    km() {
    	return this.format('km');
    }

    m() {
    	return this.format('m');
    }

    cm() {
    	return this.format('cm');
    }

    mm() {
    	return this.format('mm');
    }

    miles() {
    	return this.format('mile');
    }

    add(d, f) {
    	this.dist = this.dist + d * unitsR[f || 'km'];
    	return this;
    }

    subtract(d, f) {
    	this.dist = this.dist - d * unitsR[f || 'km'];
    	return this;
    }

}

export const dist = (d, f) => {
	return new sportDist(d, f);
}

class sportInterval {

    //km is default for dist 
    constructor(d, t, df, tf) {
    	this.sportTime = time(t, tf);
    	this.dist = d * unitsR[df || 'km'];
    	return this;
    }

    speed_km_per_hour() {
    	return this.dist / this.sportTime.hours();
    }

    pace_per_km(f) {
    	return moment.utc(this.sportTime.milliseconds() / this.dist).format(f || format);
    }

}

export const interval = (d, t, df, tf) => {
	return new sportInterval(d, t, df, tf);
}


export default {
	time: time,
	dist: dist,
	interval: interval
}

