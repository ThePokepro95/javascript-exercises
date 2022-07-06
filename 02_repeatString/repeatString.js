const repeatString = function(string, repetitions) {
    if (repetitions < 0) return "ERROR";
    let text = "";
    for (let i = 0; i < repetitions; i++){
        text += string;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
