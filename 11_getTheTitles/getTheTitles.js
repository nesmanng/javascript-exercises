const getTheTitles = function(array) {
    return array.map(array => array.title);
}; 

/* Alternative way
function getTitle(array) {
    return array.title
}

array.map(getTitle); */

// Do not edit below this line
module.exports = getTheTitles;
