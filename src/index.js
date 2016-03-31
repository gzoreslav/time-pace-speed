import tpsTime from './modules/time.js';
import tpsDist from './modules/dist.js';
import tpsInterval from './modules/interval.js';


export const time = (timeValue, timeFormat) => {
    return new tpsTime(timeValue, timeFormat);
}

export const dist = (distValue, distUnit) => {
    return new tpsDist(distValue, distUnit);
}

export const interval = (distValue, timeValue, distUnit, timeFormat) => {
	return new tpsInterval(distValue, timeValue, distUnit, timeFormat);
}


export default {
	time: time,
	dist: dist,
	interval: interval
}
