/* global define, describe, using, it, testData, testInvalidData, expect, jasmine */

define(['../app/scripts/coins', 'test/spec/SpecHelper'], function (Coins) {
    'use strict';


    describe('Coins Calculation', function() {
        var c = new Coins();

        using('valid convertToCoins', testData, function(input, pennies, coins){
            it('should return an object of coins', function() {
                expect(c.convertToCoins(pennies)).toEqual(coins);
                expect(c.convertToCoins(pennies)).toEqual(jasmine.any(Object));
            });
        });

        using('valid convertToCoins', testInvalidData, function(input, pennies){
            it('should return false', function() {
                expect(c.convertToCoins(pennies)).toEqual({});
                expect(c.convertToCoins(pennies)).toEqual(jasmine.any(Object));
            });
        });
    });
});


