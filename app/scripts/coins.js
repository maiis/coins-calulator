/* global define */
'use strict';

define([], function () {
    var Coins = function () {
        /**
        * convertToCoins()
        * calculate how many coins we need to fill the input given in pennies
        * @param Number
        * @return Object - containing the type and amount
        */
        this.convertToCoins = function(input) {
            var rest = {}, i;

            input = parseInt(input);

            i = 0;
            [200, 100, 50, 20, 2, 1].forEach(function(val, i) {
                i = Math.floor(input / val);

                if (i > 0) {
                    input -= i * val;

                    rest[val] = i;
                }
            });

            return rest;
        };
    };

    return Coins;
});
