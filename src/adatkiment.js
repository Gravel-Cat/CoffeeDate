function saveVariables(mode) {
    name = document.getElementById("username").value;
    code = document.getElementById("code").value;
    course = document.getElementById("course").value;

    localStorage.setItem("username",name);
    localStorage.setItem("code",code);
    localStorage.setItem("course",course);

    if(mode == 1) {
        drink = document.querySelector('input[name="drink"]:checked').value;
        localStorage.setItem("drink",drink);
    }
}