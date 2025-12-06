function saveNewProfile() {
    name = document.getElementById("username").value;
    code = document.getElementById("code").value;
    course = document.getElementById("course").value;
    drink = document.querySelector('input[name="drink"]:checked').value;
    localStorage.setItem("username",name);
    localStorage.setItem("code",code);
    localStorage.setItem("course",course);
    localStorage.setItem("drink",drink);

    localStorage.setItem("spot1","empty");
    localStorage.setItem("spot2","empty");
    localStorage.setItem("spot3","empty");
    localStorage.setItem("spot4","empty");
    localStorage.setItem("spot5","empty");
}

function saveProfile() {
    name = document.getElementById("username").value;
    code = document.getElementById("code").value;
    course = document.getElementById("course").value;
    localStorage.setItem("username",name);
    localStorage.setItem("code",code);
    localStorage.setItem("course",course);
}

function saveFurniture() {
    document.getElementById("spotone").addEventListener("change", (e) => {localStorage.setItem("spot1",e.target.value);});
//    spot2 = document.getElementById("spottwo").value;
//    spot3 = document.getElementById("spotthree").value;
//    spot4 = document.getElementById("spotfour").value;
//    spot5 = document.getElementById("spotfive").value;
//    localStorage.setItem("spot1",spot1);
//    localStorage.setItem("spot2",spot2);
//    localStorage.setItem("spot3",spot3);
//    localStorage.setItem("spot4",spot4);
//    localStorage.setItem("spot5",spot5);
}

//    spot1 = document.getElementById("spot1");
//    text1 = spot1.options[spot1.selectedIndex].text
//    spot2 = document.getElementById("spot2");
//    text2 = spot2.options[spot2.selectedIndex].text
//    spot3 = document.getElementById("spot3");
//    text3 = spot3.options[spot3.selectedIndex].text
//    spot4 = document.getElementById("spot4");
//    text4 = spot4.options[spot4.selectedIndex].text
//    spot5 = document.getElementById("spot5");
//    text5 = spot5.options[spot5.selectedIndex].text
//
//    localStorage.setItem("spot1",text1);
//    localStorage.setItem("spot2",text2);
//    localStorage.setItem("spot3",text3);
//    localStorage.setItem("spot4",text4);
//    localStorage.setItem("spot5",text5);