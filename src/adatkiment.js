function saveVariables() {
    name = document.getElementById("username").value;
    code = document.getElementById("code").value;
    course = document.getElementById("course").value;
    drink = document.querySelector('input[name="drink"]:checked').value;

    localStorage.setItem("username",name);
    localStorage.setItem("code",code);
    localStorage.setItem("course",course);
    localStorage.setItem("drink",drink);
}