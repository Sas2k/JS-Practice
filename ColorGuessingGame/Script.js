const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

let color_ops = [$("#c1"), $("#c2"), $("#c3"), $("#c4"), $("#c5"), $("#c6")];

const generateColors = () => {
    let value = `rgb(${randomBetween(0, 255)},${randomBetween(0, 255)},${randomBetween(0, 255)})`;
    $("#RGB").text(value);
    const randomElement = color_ops[Math.floor(Math.random() * color_ops.length)];
    delete color_ops[randomElement];
    let color_th = color_ops;
    for (let index = 0; index < color_th.length; index++) {
        const element = color_th[index];
        element.css("background-color", `rgb(${randomBetween(0, 255)},${randomBetween(0, 255)},${randomBetween(0, 255)})`);   
    }
    answer.css("background-color", value);
    return ""
};

$(function(){
    $("#new").click(function(){ 
        generateColors();
    });
    generateColors();
});