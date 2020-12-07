function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 4));
var mySum2 = function (num1, num2) {
    if (typeof num1 === 'string') {
        num1 = parseInt(num1);
    }
    return num1 + num2;
};
console.log(mySum2('3', 5));
function getName(first, last) {
    if (last === undefined)
        return first;
    return first + ' ' + last;
}
console.log(getName('John'));
