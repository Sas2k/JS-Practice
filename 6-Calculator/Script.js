$(function(){
    $("#calculate").click(function(){ 
        var n1 = $("#Num1").val()
        var n2 = $("#Num2").val()
        var op = $("#operation").val()
        calculation(n1, n2, op, $("Answer"));
    });
});

const calculation = (num1, num2, operand) => {
    num1 = Number(num1);
    num2 = Number(num2);
    switch(operand){
        case "+":
            console.log(num1 + num2)
            document.getElementById("Answer").innerHTML = num1 + num2
            break;
        case "-":
            console.log(num1 - num2)
            document.getElementById("Answer").innerHTML = num1 - num2
            break;
        case "*":
            console.log(num1 * num2)
            document.getElementById("Answer").innerHTML = num1 * num2
            break;
        case "/":
            console.log(num1 / num2)
            document.getElementById("Answer").innerHTML = num1 / num2
            break;
    };
};