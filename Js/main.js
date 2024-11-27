//id
let button1 = document.getElementById("change1");
let button2 = document.getElementById("change2");
let button3 = document.getElementById("change3");
let code = document.getElementById("code");
let plan1 = document.getElementById("plan1");
let plan2 = document.getElementById("plan2");
let prise = document.getElementById("prise");
let checked1 = document.getElementById("checked1");
let checked2 = document.getElementById("checked2");
let f1 = document.forms.f1

//onclick
button1.onclick = function(){
    button1.style.border = "3px solid blueviolet";
    button1.style.background = "lavender";

    button2.style.background = "white";
    button2.style.border = "3px solid rgba(0, 0, 0, 0.11)";

    button3.style.background = "white";
    button3.style.border = "3px solid rgba(0, 0, 0, 0.11)";
}
button2.onclick = function(){
        button2.style.border = "3px solid blueviolet";
        button2.style.background = "lavender"

        button1.style.border = "3px solid rgba(0, 0, 0, 0.11)";
        button1.style.background = "white";

        button3.style.background = "white";
        button3.style.border = "3px solid rgba(0, 0, 0, 0.11)";
}
button3.onclick = function (){
    button3.style.border = "3px solid blueviolet";
    button3.style.background = "lavender"

    button1.style.border = "3px solid rgba(0, 0, 0, 0.11)";
    button1.style.background = "white";

    button2.style.background = "white";
    button2.style.border = "3px solid rgba(0, 0, 0, 0.11)";
}
plan1.onclick = function(){
    prise.textContent = '$20/Month'
    checked1.checked = true
    plan1.style.border = "2px solid blueviolet";
    plan1.style.background = "lavender"
    plan2.style.border = "none";
    plan2.style.background = "white"
}
plan2.onclick = function(){
    prise.textContent = '$16/Month'
    checked2.checked = true
    plan2.style.border = "2px solid blueviolet";
    plan2.style.background = "lavender"
    plan1.style.border = "none";
    plan1.style.background = "white"
}
plan1.onclick()

//postal code
code.oninput = function(){
    this.value = this.value.substring(0, 5);
}

//form onsubmit
f1.onsubmit = function(ev){
    ev.preventDefault();
    let arr = JSON.parse(localStorage.getItem("users")) || [];
    arr.push({name: f1.userName.value, email: f1.userEmail.value, postalCode: f1.postalCode.value, country: f1.country.value});
    localStorage.setItem("users", JSON.stringify(arr));
    let div = document.createElement("div");

    f1.userName.value = '';
    f1.userEmail.value = '';
    f1.postalCode.value = '';
    f1.country.value = ''
}