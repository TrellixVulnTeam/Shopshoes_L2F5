const { number } = require("mathjs");

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

function copy() {
    var s = document.getElementById("size").value;
    document.getElementById("size36", ).value = s;
    document.getElementById("size365").value = s;
    document.getElementById("size375").value = s;
    document.getElementById("size38").value = s;
    document.getElementById("size385").value = s;
    document.getElementById("size39").value = s;
    document.getElementById("size40").value = s;
    document.getElementById("size405").value = s;
    document.getElementById("size41").value = s;
    document.getElementById("size42").value = s;
    document.getElementById("size425").value = s;
    document.getElementById("size43").value = s;
    // alert(s)
}