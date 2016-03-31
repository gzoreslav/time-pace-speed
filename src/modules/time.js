import moment from 'moment';
import {DEFAULT_TIME_FORMAT, DEFAULT_TIME_UNIT, TIME_UNITS_CONVERTOR} from './const.js';


const utc = (timeValue, timeFormat) => {
	return moment.utc(`1970-01-01 ${timeValue}`, `YYYY-MM-DD ${timeFormat || DEFAULT_TIME_FORMAT}`);
}

export default class tpsTime {

    /**
     * tpsTime class, initialized with time value.
     * @param {string|moment} timeValue Optional default '00:00:00.000'
     * @param {string} timeFormat Optional default DEFAULT_TIME_FORMAT 'HH:mm:ss.SSS'
     * @return {Object} this
     * @constructor
     */
    constructor(timeValue, timeFormat) {
        this.time = (timeValue && timeValue._isAMomentObject)
            ? timeValue
            : utc(timeValue || '00:00:00.000', timeValue && timeFormat ? timeFormat : DEFAULT_TIME_FORMAT);
    	return this;
    }

    /**
     * @return {Moment} this.time
     */
    asMoment() {
    	return this.time;
    }

    /**
     * formats this.time into appropriate format
     * @param {string} timeFormat Optional default DEFAULT_TIME_FORMAT 'HH:mm:ss.SSS'
     * @return {string}
     */
    format(timeFormat) {
    	return this.time.format(timeFormat || DEFAULT_TIME_FORMAT);
    }

    /**
     * converts this.time into appropriate unit
     * @param {string} timeUnit Optional default DEFAULT_TIME_UNIT 'ms' - milliseconds
     * @return {float}
     */
    convert(timeUnit) {
        return parseInt(this.format('x')) / TIME_UNITS_CONVERTOR[timeUnit || DEFAULT_TIME_UNIT];
    }

    /**
     * @return {int} milliseconds
     */
    milliseconds() {
    	return this.convert();
    }

    /**
     * calculate time as seconds with decimical part
     * @return {float} seconds
     */
    seconds() {
    	return this.convert('s');
    }

    /**
     * calculate time as minutes with decimical part
     * @return {float} minutes
     */
    minutes() {
        return this.convert('m');
    }

    /**
     * calculate time as hours with decimical part
     * @return {float} hours
     */
    hours() {
		return this.convert('h');
    }

    /**
     * substract time from this.time
     * modifies this.time
     * @param {string|moment} timeValue
     * @param {string} timeFormat Optional default DEFAULT_TIME_FORMAT 'HH:mm:ss.SSS'
     * @return {Object} this
     */
    substract(timeValue, timeFormat) {
    	this.time = moment.utc(this.time - (timeValue._isAMomentObject ? timeValue : utc(timeValue, timeFormat)));
    	return this;
    }

    /**
     * add time to this.time
     * modifies this.time
     * @param {string|moment} timeValue
     * @param {string} timeFormat Optional default DEFAULT_TIME_FORMAT 'HH:mm:ss.SSS'
     * @return {Object} this
     */
    add(timeValue, timeFormat) {
    	this.time = moment.utc(this.time + (timeValue._isAMomentObject ? timeValue : utc(timeValue, timeFormat)));
    	return this;
    }
};
