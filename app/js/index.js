/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {log, logTitle} from 'logger';
/* your imports */
logTitle('Title')
/* coding examples */

/* objects */

var name = "Damine mohamed";
var age = 21.5;
var hasDRiverLicence = true;

var person = {
    name: "Damine mohamed",
    age: 21,
    hasDRiverLicence: true,
    dateOfBirth: "18/06/1995",
    address:{
        firstLine: "123",
        postCode:"14010",
        country:"alg"
    }
};

log(JSON.stringify(person));
log(JSON.stringify(person.address))

log(person.name);
log(person.age);
log(person.hasDRiverLicence);
log(person.dateOfBirth);


log(Object.values(person))
log(Object.values(person.address))
