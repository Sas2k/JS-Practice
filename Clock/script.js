function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
};

$(async function(){
    while (true){
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        $("#clock").text(time)
        console.log(time)
        await sleep(100)
    }
});
