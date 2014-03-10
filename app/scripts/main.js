'use strict';

require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery'
    },
    shim: {
        'jQuery': {
            exports: '$'
        }
    }
});

// Load modules and initialise
require(
    [
        'app',
        'input',
        'pennies',
        'coins'
    ], function(app){
        app.init();
    }
);
