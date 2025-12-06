function saveNewProfile() {
    name = document.getElementById("username").value;
    code = document.getElementById("code").value;
    cname = document.getElementById("cname").value;
    drinkmain = document.querySelector('input[name="drinkmain"]:checked').value;
    const money = 0;
    const moneyJSON = JSON.stringify(money);
    localStorage.setItem("username",name);
    localStorage.setItem("code",code);
    localStorage.setItem("cname",cname);
    localStorage.setItem("drinkmain",drinkmain);
    localStorage.setItem("money",moneyJSON);

    const empty = "empty";
    const emptyJSON = JSON.stringify(empty);
    localStorage.setItem("spot1",emptyJSON);
    localStorage.setItem("spot2",emptyJSON);
    localStorage.setItem("spot3",emptyJSON);
    localStorage.setItem("spot4",emptyJSON);
    localStorage.setItem("spot5",emptyJSON);
}

function saveProfile() {
    name = document.getElementById("username").value;
    code = document.getElementById("code").value;
    cname = document.getElementById("cname").value;
    localStorage.setItem("username",name);
    localStorage.setItem("code",code);
    localStorage.setItem("cname",cname);
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