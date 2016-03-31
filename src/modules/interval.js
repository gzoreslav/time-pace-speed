import tpsTime from './time.js';
import tpsDist from './dist.js';
import tpsSpeed from './speed.js';
import tpsPace from './pace.js';


export default class tpsInterval {

    /**
     * tpsInterval class, wrapper for tpsSpeed and tpsPace classes
     * @param {int|float} distValue
     * @param {string|moment} timeValue
     * @param {string} distUnit Optional default DEFAULT_DIST_UNIT 'm' - meters
     * @param {string} timeFormat Optional default DEFAULT_TIME_FORMAT 'HH:mm:ss.SSS'
     * @return {Object} this
     * @constructor
     */
    constructor(distValue, timeValue, distUnit, timeFormat) {
    	this.time = new tpsTime(timeValue, timeFormat);
    	this.dist = new tpsDist(distValue, distUnit);
        this.speed = new tpsSpeed(this);
        this.pace = new tpsPace(this);
    	return this;
    }

}
