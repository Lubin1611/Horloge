/**var temps = new Date();

var heure = temps.getHours();
var minute = temps.getMinutes();
var seconde = temps.getSeconds();

document.getElementById("jour").innerHTML = heure + " " + minute + " " + seconde; **/

var temps = new Date();
var time = temps.getSeconds() + 60 * temps.getMinutes() + 3600 * temps.getHours();
var donneHeure = temps.getHours();
var donneMinute = temps.getMinutes();

document.write(donneMinute + donneHeure);


var tempsSec = document.getElementById("seconde");
var tempsMin = document.getElementById("minute");
var tempsHeure = document.getElementById("heure");

tempsSec.style.transform = "rotate(" + (time * 6) + "deg)";
tempsMin.style.transform = "rotate(" + Math.round(time / 10) + "deg)";
tempsHeure.style.transform = "rotate(" + Math.round(time / 120) + "deg)";



setInterval(function() {

    time++;

    tempsSec.style.transform = "rotate(" + (time * 6) + "deg)";
    tempsMin.style.transform = "rotate(" + Math.round(time / 10) + "deg)";
    tempsHeure.style.transform = "rotate(" + Math.round(time / 120) + "deg)";

},1000);


function setAlarme() {

    var entreeHeure = document.getElementById("heureAlarm").value;
    var entreeMinutes = document.getElementById("minuteAlarm").value;

    document.getElementById("heure1").innerHTML = entreeHeure + " heure(s)";
        document.getElementById("min1").innerHTML = entreeMinutes + " minute(s)";


    if (entreeHeure == donneHeure && entreeMinutes == donneMinute) {

        alert("Alarme");
    }

}

console.log(setAlarme());








/**function horloge () {

    timeUp = setTimeout(horloge, 1000);

    tempsSec.style.transform = "rotate(" + (time * 6) + "deg)";
    tempsMin.style.transform = "rotate(" + Math.round(time / 10) + "deg)";
    tempsHeure.style.transform = "rotate(" + Math.round(time / 120) + "deg)";

}

horloge();**/