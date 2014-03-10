/* global define */
'use strict';

define([], function () {
    var Pennies = function () {
        /**
        * convertToPennies()
        * Convert a string to a Number of pennies
        * @param sting
        * @return Number
        */
        this.convertToPennies = function(value) {
            if (/[^.£p\d]/g.test(value)) {
                return 0;
            }

            var sum = parseFloat(value.replace(/[^0-9-.]/g, ''));

            if (value.match('£') || /\./g.test(sum)) {
                sum = sum*Math.pow(10,2);
            }
            return isNumber(sum)? Math.round(sum) : 0;
        };
    };

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    return Pennies;
});
