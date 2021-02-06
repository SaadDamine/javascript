/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import {log, logTitle} from 'logger';
/* your imports */
logTitle('Arrays')
/* coding examples */

/* Arrays */

var names = ["Damine", "mohamed", "Saad", 21,true]

log(names + " type= " + typeof names);


log("name in p 2 is "+names[2]);
log("has size "+ names.length);

log("normal loop ")

//loop for
for(var n of names){
    log(n + " type= " + typeof n);
}

log("forEach loop ")

names.forEach(function(n,index) {
    log(n + " type= " + typeof n +" with index "+ index);
})