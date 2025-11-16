const x = document.getElementById("cafename");
const drinkfile = document.getElementById("drink");

x.textContent = localStorage.getItem("username") + " (" + localStorage.getItem("code") + ") hallgató kávézója";
drinkfile.src = "../doc/ui/" + localStorage.getItem("drink") + ".png";