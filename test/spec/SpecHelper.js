/* global jasmine, testData, testInvalidData, using, expect */

'use strict';

var testData = [
    ['4', 4, {2 : 2}],
    ['85', 85, {50 : 1,  20 : 1, 2  : 7, 1 : 1}],
    ['197p', 197, {100 : 1, 50 : 1, 20 : 2, 2 : 3, 1 : 1}],
    ['2p', 2, {2 : 1} ],
    ['1.87', 187, {100 : 1, 50 : 1, 20 : 1, 2 : 8, 1 : 1}],
    ['£1.23', 123, {100 : 1, 20 : 1, 2  : 1, 1 : 1}],
    ['£2', 200, {200 : 1} ],
    ['£10', 1000, {200 : 5}],
    ['£1.87p', 187, {100 : 1, 50 : 1, 20 : 1, 2 : 8, 1 : 1}],
    ['£1p', 100, {100 : 1} ],
    ['£1.p', 100, {100 : 1}],
    ['001.41p', 141, {100 : 1, 20 : 2, 1  : 1}],
    ['4.235p', 424, {200 : 2, 20 : 1, 2  : 2}],
    ['£1.257422457p', 126, {100 : 1, 20 : 1, 2  : 3}]
];

var testInvalidData = [
    ['', 0, {}],
    ['1x', 0, {}],
    ['£1x.0p', 0, {}],
    ['£p', 0, {}]
];

function using(name, values, func){
    for (var i = 0, count = values.length; i < count; i++) {
        if (Object.prototype.toString.call(values[i]) !== '[object Array]') {
            values[i] = [values[i]];
        }
        func.apply(this, values[i]);
        jasmine.currentEnv_.currentSpec.description += ' (with "' + name + '" using ' + values[i].join(', ') + ')';
    }
}
