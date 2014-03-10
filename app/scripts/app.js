/* global define */

define([
    'jquery',
    'input',
    'pennies',
    'coins'
], function($, Input, Pennies, Coins){
    'use strict';

    /**
    * Process the value from the form and convert it to pennies / coins
    * @param event - submit event from the form
    */
    var process = function(e) {
        e.preventDefault();

        var field = $('#amountField'),
            value, pennies, coins, it, ps, cs;

        it = new Input();
        ps = new Pennies();
        cs = new Coins();

        value = field.val();

        // if the value is valid (no whitespace, no non-numieical, contains digits)
        if (it.validate(value)) {
            // convert the value to pennies
            pennies = ps.convertToPennies(value);
            // get the numbers of coins to march the pennies
            coins = cs.convertToCoins(pennies);
            // display the result
            showResult(value, coins);
        } else {
            $('#amountField').parent().addClass('has-error');
            $('#amountField').on('focus',function() {
                $(this).off();
                $(this).parent().removeClass('has-error');
            });
        }
    };

    /**
    * Append the result of the process in the DOM
    * @param value - submitted value
    * @param data - coins data returned by process function
    */
    var showResult = function(value, data) {
        var items = [], coinType, results = $('#resultsList'), resultsGroup;

        // match a coin value to his symbol
        coinType = {
            1: '1p',
            2: '2p',
            20: '20p',
            50: '50p',
            100: '1£',
            200: '2£'
        };

        // create an index for the results
        resultsGroup = $('<ul>', { 'class': 'list-group' });

        // append each type of coins with the ammount of them
        resultsGroup.append('<li class="list-group-item active">'+value+'</li>');
        $.each(data, function (coin, amount) {
            items.push('<li class="list-group-item">' + amount + ' x <span class="badge">' + coinType[coin] + '</span></li>');
        });
        resultsGroup.append(items.join(''));

        // append the index in the DOM
        // NOTE: in regards of perfomance:
        // append only to the DOM at the end of a loop
        results.prepend(resultsGroup);
    };

    /**
    * Initialization of the app
    * Binding the submission of the form
    */

    var init = function(){
        $('#convertForm').on('submit', process);
    };

    return {
        init: init
    };
});
