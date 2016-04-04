import {DEFAULT_DIST_UNIT, DIST_UNITS_CONVERTOR} from './const.js';

const convertRight = (value, unit) => {
    return value * DIST_UNITS_CONVERTOR[unit || DEFAULT_DIST_UNIT];
};

export default class tpsDist {

    /**
     * tpsDist class, initialized with distance value.
     * @param {int|float} distValue
     * @param {string} distUnit Optional default DEFAULT_DIST_UNIT 'm' - meters
     * @return {Object} this
     * @constructor
     */
    constructor(distValue, distUnit) {
        this.dist = convertRight(distValue, distUnit);
        return this;
    }

    /**
     * converts this.dist into appropriate unit
     * @param {string} distUnit Optional default DEFAULT_DIST_UNIT 'm' - meters
     * @return {float}
     */
    convert(distUnit) {
        return this.dist / DIST_UNITS_CONVERTOR[distUnit || DEFAULT_DIST_UNIT];
    }

    /**
     * converts this.dist to killometres
     * @return {float} killometers
     */
    km() {
        return this.convert('km');
    }

    /**
     * converts this.dist to metres
     * @return {float} meters
     */
    m() {
        return this.convert('m');
    }

    /**
     * converts this.dist to centimetres
     * @return {float} centimetres
     */
    cm() {
        return this.convert('cm');
    }

    /**
     * converts this.dist to millimetres
     * @return {float} millimetres
     */
    mm() {
        return this.convert('mm');
    }

    /**
     * converts this.dist to miles
     * @return {float} miles
     */
    miles() {
        return this.convert('mile');
    }

    /**
     * add distance to this.dist
     * modifies this.dist
     * @param {int|float} distValue
     * @param {string} distUnit Optional default DEFAULT_DIST_UNIT 'm' - meters
     * @return {Object} this
     */
    add(distValue, distUnit) {
        this.dist = this.dist + convertRight(distValue, distUnit);
        return this;
    }

    /**
     * substracts distance from this.dist
     * modifies this.dist
     * @param {int|float} distValue
     * @param {string} distUnit Optional default DEFAULT_DIST_UNIT 'm' - meters
     * @return {Object} this
     */
    substract(distValue, distUnit) {
        this.dist = this.dist - convertRight(distValue, distUnit);
        return this;
    }

}
