/*****************************************************************
File: common.js
Author: Priscila Ribas da Costa
Description: 
    Common functions.
Version: 0.0.1
Updated: Oct 31, 2017

*****************************************************************/

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//change the first letter to uppercase
function upperCase(text){
    return text.split(' ').map(str => str[0].toUpperCase() + str.substring(1)).join(' ');
}

//Return the formated fullname
export function formatName({title = 'empty', first = 'empty', last = 'empty'} , withTitle = false){
    let fullName = '';
    if (withTitle) {
        fullName =  upperCase(title) + ' ';
    }
    fullName += upperCase(first) + ' ' + upperCase(last);
    
    return fullName;
}

//Return the formated Day of Birth
export function formatDOB(dob = '1900-01-01 00:00:01'){
    let date = new Date(dob);
    return monthNames[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear();
}

//Return the formated address
export function formatLocation({street = 'empty', city = 'empty', state = 'empty', postcode = 0}, line = 1){
    switch(line){
    case 1:
        return upperCase(street);
    case 2:
        return upperCase(city) + ', ' + upperCase(state);
    case 3:
        return postcode;
    }
}

//return the current age
export function getAge(dob = '1900-01-01 00:00:01'){
    let date = new Date(Date.now() - new Date(dob).getTime());
    return Math.abs(date.getUTCFullYear() - 1970);
}