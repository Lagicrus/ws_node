function add(a,b) {
    return a+b;
}
function compare(array_1, array_2) {
    if (array_1 === undefined || array_2 === undefined){
        return false;
    }
    if (array_1.length !== array_2.length){
        return false;
    }
    for (const value in array_1) {
        if (!(array_2.includes(array_1[value]))){
            return false;
        }
        /*if (!(value in array_2)) {
            return false;
        }*/
        if (!(array_1[value] === array_2[value])) {
            return false;
        }
    }
    return true
}
function largest(array){
    let biggest = array[0];
    for (const value of array){
        if (value > biggest){
            biggest = value;
        }
    }
    return biggest;
}
module.exports.add = add;
module.exports.compare = compare;
module.exports.largest = largest;