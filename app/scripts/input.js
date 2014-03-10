/* global define */

'use strict';

define([], function () {
    var Input = function () {
        /**
        * validate()
        * Sanitize and validate the value
        * Remove non-numerical caracter, whitepace
        * @param string
        * @return boolean
        */
        this.validate = function(value) {
            value = value.trim();

            // non-numeric characters expect £.p
            // OR no number
            // OR length = 0
            if (/[^.£p\d]/g.test(value) || !/[\d]/g.test(value) || !value.length) {
                return false;
            }

            return true;
        };
    };

    return Input;
});
