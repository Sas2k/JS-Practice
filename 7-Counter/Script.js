// If your asking why I didn't use any variable for the document.getElementById here
// It's because I keep getting this error
//! Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')
//! at add (Script.js:13:21)
//! at <anonymous>:1:1

var add = () => {
    let num = Number(document.getElementById("counter").innerHTML)
    num += 1
    console.log(num)
    document.getElementById("counter").innerHTML = num;
};

var substract = () => {
    let num = Number(document.getElementById("counter").innerHTML)
    num -= 1
    console.log(num)
    document.getElementById("counter").innerHTML = num;
};

var reset = () => {
    document.getElementById("counter").innerHTML = 0;
};