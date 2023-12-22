function displayTime() {
    time = new Date('12/13/2000');
    presentTime = new Date();
    liveTime = presentTime - time;
    year = ( presentTime.getFullYear() - time.getFullYear() );
    month = ( presentTime.getMonth() - time.getMonth() );
    day = ( presentTime.getDate() - time.getDate() );
    hour = ( presentTime.getHours() - time.getHours() );
    minute = ( presentTime.getMinutes() - time.getMinutes() );
    second = ( presentTime.getSeconds() - time.getSeconds() );
    document.getElementById('timee').innerHTML = `I Am ${year} Yrs, ${month} Months, ${day} Days, 
                                                    ${hour} Hours : ${minute} Minutes : ${second} Seconds OLD`;
}
setInterval(displayTime, 1000);