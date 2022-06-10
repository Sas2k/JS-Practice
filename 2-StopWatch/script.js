let time = 0.00;
let stop = false;

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
};

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

$(function(){
  $("#start").click(async function(){
    stop = false
    while (stop === false) {
        time += 0.01
        time = round(time, 2)
        console.log(time)
        $("#clock").text(time);
        await sleep(10)
    }
  });
  $("#stop").click(async function(){
      stop = true
      $("#clock").text(time)
  });
  $("#restart").click(async function(){
      time = 0.00
      $("#clock").text(time)
  })
});