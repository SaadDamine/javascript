/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {log, logTitle} from 'logger';
/* your imports */
logTitle('Arithmetic Operators')
/* coding examples */

/* Arithmetic Operators */
// + - / * %

var addition = 2 + 2;
log("addition = 2 + 2 is " + addition);
var subtraction = 9 - 5;
log("subtraction = 9 - 5 " + subtraction);
var division = 16 / 4;
log("division = 16 / 4 is " + division);
var multiplication = 2 * 2;
log("multiplication = 2 * 2 is " + multiplication)
var reminder = 4 % 5;
log("reminder = 4 % 5 is " + reminder)