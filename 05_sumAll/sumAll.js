const sumAll = function(n1, n2) {
    if (!(typeof n1 === "number" && typeof n2 ===  "number")) return "ERROR";
    if (n1 < 0 || n2 < 0) return "ERROR";
    let greater = n1;
    let lesser = n2;
    if (n2 > n1){
        greater = n2;
        lesser = n1;
    }
    let total = 0;
    for (let i = lesser; i <= greater; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
