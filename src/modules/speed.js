export default class tpsSpeed {

    /**
     * tpsSpeed class
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
     * calculate speed in appropriate distance and time units, example km/h, MPH
     * @param {string} distUnit Optional default DEFAULT_DIST_UNIT 'm' - meters
     * @param {string} timeUnit Optional default DEFAULT_TIME_UNIT 'h' - hour
     * @return {float}
     */
    convert(distUnit, timeUnit) {
        return this.dist.convert(distUnit) / this.time.convert(timeUnit)
    }

    km_h() {
        return this.convert('km', 'h');
    }

    mph() {
        return this.convert('mile', 'h');
    }

}
