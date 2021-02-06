/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {log, logTitle} from 'logger';
/* your imports */
logTitle('Title')
/* coding examples */

/* Variables */

var name = "Damine mohamed";
var age = 21.5;
var hasDRiverLicence = true;
var empty = undefined

log(name + " type= " + typeof name);
log(age + " type= " + typeof age);
log(hasDRiverLicence + " type= " + typeof hasDRiverLicence);
log(empty + " type= " + typeof empty);

