const leapYears = function(theYear) {
    if (theYear % 4 === 0){
        if (theYear % 100 === 0 && !(theYear % 400 === 0)) return false;
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
