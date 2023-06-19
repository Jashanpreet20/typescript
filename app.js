var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
var numarray = [];
var stringarray = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultobj) {
    console.log(resultobj.val);
}
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2);
    var stringresult = add(num1, num2);
    console.log(result);
    numarray.push(result);
    console.log(stringresult);
    stringarray.push(stringresult);
    printResult({ val: result, timestamp: new Date() });
});
var mypromise = new Promise(function (res, rej) {
    setTimeout(function () {
        res('it worked');
    }, 1000);
});
mypromise.then(function (result) {
    console.log(result.split('w'));
});
