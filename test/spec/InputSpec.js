/* global define, describe, using, it, testData, testInvalidData, expect */

define(['../app/scripts/input', 'test/spec/SpecHelper'], function (Input) {
    'use strict';

    describe('Input validation', function() {

        var i = new Input();

        using('valid inputs', testData, function(input){
            it('should return true for valid input', function() {
                expect(i.validate(input)).toBe(true);
            });
        });

        using('invalid inputs', testInvalidData, function(input){
            it('should return false for invalid input', function() {
                expect(i.validate(input)).toBe(false);
            });
        });

        it('validate() should not allow an empty value or space value', function(){
            expect(i.validate('')).toBeFalsy();
            expect(i.validate('  ')).toBeFalsy();
        });
    });
});
