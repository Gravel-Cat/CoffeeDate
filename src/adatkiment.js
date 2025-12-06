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
    const spot1 = document.getElementById("spotone").value;
    const value1 = JSON.stringify(spot1);
    const spot2 = document.getElementById("spottwo").value;
    const value2 = JSON.stringify(spot2);
    const spot3 = document.getElementById("spotthree").value;
    const value3 = JSON.stringify(spot3);
    const spot4 = document.getElementById("spotfour").value;
    const value4 = JSON.stringify(spot4);
    const spot5 = document.getElementById("spotfive").value;
    const value5 = JSON.stringify(spot5);
    localStorage.setItem("spot1",value1);
    localStorage.setItem("spot2",value2);
    localStorage.setItem("spot3",value3);
    localStorage.setItem("spot4",value4);
    localStorage.setItem("spot5",value5);
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