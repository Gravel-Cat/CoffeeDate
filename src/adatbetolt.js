const x = document.getElementById("cafename");
const drinkfile = document.getElementById("drinkmain");
const spot1 = document.getElementById("spot1");
const spot2 = document.getElementById("spot2");
const spot3 = document.getElementById("spot3");
const spot4 = document.getElementById("spot4");
const spot5 = document.getElementById("spot5");

x.textContent = localStorage.getItem("username") +
                " (" + localStorage.getItem("code") +
                ") hallgató kávézója -o- Összeg: " + JSON.parse(localStorage.getItem("money")) + "Ft";
drinkfile.src = "../doc/ui/" + localStorage.getItem("drinkmain") + ".png";
spot1.src = "../doc/ui/" + JSON.parse(localStorage.getItem("spot1")) + ".png";
spot2.src = "../doc/ui/" + JSON.parse(localStorage.getItem("spot2")) + ".png";
spot3.src = "../doc/ui/" + JSON.parse(localStorage.getItem("spot3")) + ".png";
spot4.src = "../doc/ui/" + JSON.parse(localStorage.getItem("spot4")) + ".png";
spot5.src = "../doc/ui/" + JSON.parse(localStorage.getItem("spot5")) + ".png";