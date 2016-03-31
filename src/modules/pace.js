import moment from 'moment';
import tpsTime from './time.js';


export default class tpsPace {

    /**
     * tpsPace class
     * @param {Object} tpsInterval
     * @return {Object} this
     * @constructor
     */
    constructor(params) {
        this.time = params.time;
        this.dist = params.dist;
        return this;
    }

    /**
     * calculate pace in appropriate distance and returns time formatted int timeFormat
     * @param {string} distUnit Optional default DEFAULT_DIST_UNIT 'm' - meters
     * @return {float}
     */
    convert(distUnit) {
        return new tpsTime(moment.utc(this.time.milliseconds() / this.dist.convert(distUnit)));
    }

    /**
     * calculate pace time per kilometer
     * @return {moment}
     */
    per_km() {
        return this.convert('km');
    }
    
}
