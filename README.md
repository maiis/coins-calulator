# Coins Calculator

### Summary

Write a simple application that given a number of pennies will calculate the minimum number of Sterling coins needed to make that amount.

 Eg. 123p = 1 x £1, 1 x 20p, 1 x 2p, 1 x 1p


### Requirements

 * Account for only the common £2, £1, 50p, 20p, 2p and 1p coins. Ignore those commemorative £5 coins.
 * You MUST use JavaScript (node.js is allowed too!), CSS and HTML to do this.
 * The user interface should consist of a input field that accepts an 'amount' string (Eg. 92p, £2.12) and displays the denominations needed when the user hits 'enter'.
 
### Test Data

In the first column is a string of user input, and in the second the desired integer expressed as pence.

    | input | pence (canonical) | description |
    | 4 | 4 | single digit |
    | 85 | 85 | double digit |
    | 197p | 197 | pence symbol |
    | 2p | 2 | pence symbol single digit |
    | 1.87 | 187 | pounds decimal |
    | £1.23 | 123 | pound symbol |
    | £2 | 200 | single digit pound symbol |
    | £10 | 1000 | double digit pound symbol |
    | £1.87p | 187 | pound and pence symbol |
    | £1p | 100 | missing pence |
    | £1.p | 100 | missing pence but present decimal point |
    | 001.41p | 141 | buffered zeros |
    | 4.235p | 424 | rounding three decimal places to two |
    | £1.257422457p | 126 | rounding with symbols |

Likewise, the application should not accept the following inputs, 

    | input | pence (canonical) | description |
    | | 0 | empty string |
    | 1x | 0 | non-numeric character |
    | £1x.0p | 0 | non-numeric character |
    | £p | 0 | missing digits | 

### Running
Gulp is there to watch changes, lint javascript, compile sass and livereload
```shell
npm install
bower install
gulp watch
```





