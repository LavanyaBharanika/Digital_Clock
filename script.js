const clock = document.getElementById("clock")

function displayTime(){
    var da = new Date()
    var hours = da.getHours();
    var minutes = da.getMinutes();
    var seconds = da.getSeconds();
    let amorpm = "AM";
    if(hours>=12){
        amorpm = "PM"
    }
    if(hours > 12){
        hours -=12
    }
    if(hours < 10){
        hours = "0" +hours;
    }
    if(minutes < 10){
        minutes = "0" +minutes;
    }
    if(seconds < 10){
        seconds = "0" +seconds;
    }
    
    clock.innerHTML = hours + ":" + minutes + ":"+seconds +" "+amorpm;
}

setInterval(displayTime, 1000)

