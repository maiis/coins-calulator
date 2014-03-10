/* global define, describe, using, it, testData, testInvalidData, expect, jasmine */

define(['../app/scripts/pennies', 'test/spec/SpecHelper'], function (Pennies) {
    'use strict';


    describe('Pennies Conversion', function() {

        var p = new Pennies();

        using('valid convertToPennies', testData, function(input, result){
            it('should return a number of pennies and be true', function() {
                expect(p.convertToPennies(input)).toBeTruthy();
                expect(p.convertToPennies(input)).toEqual(result);
            });
        });

        using('invalid convertToPennies', testInvalidData, function(input, result){
            it('should return 0 and be false', function() {
                expect(p.convertToPennies(input)).toBeFalsy();
                expect(p.convertToPennies(input)).toEqual(result);
            });
        });

        using('number', testData, function(input){
            it('should return a number', function() {
                expect(p.convertToPennies(input)).toEqual(jasmine.any(Number));
            });
        });

        using('number', testInvalidData, function(input){
            it('should return a number', function() {
                expect(p.convertToPennies(input)).toEqual(jasmine.any(Number));
                expect(p.convertToPennies(input)).toEqual(0);
            });
        });
    });
});
