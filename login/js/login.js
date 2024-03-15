const area = document.querySelector(".area");

//Login
const sevengreenid = document.querySelector(".sevengreenid");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

const invalid = document.querySelector(".invalid");

//Main
const username_field = document.querySelector(".username_field");
const sevengreenid_field = document.querySelector(".sevengreenid_field");
const born_field = document.querySelector(".born_field");
const email_field = document.querySelector(".email_field");
const country_field = document.querySelector(".country_field");

//Register
const sevengreenid_field_register = document.querySelector(".sevengreenid_field_register");

let loadedsevengreeid = Math.floor((Math.random() * 9999999999) + 1111111111);

sevengreenid_field_register.value = loadedsevengreeid;

var found = false;

//Store
const store_username = [];
const store_sevengreenid = [];
const store_email = [];
const store_password = [];

area.addEventListener("click", event => {
    const value = event.target.dataset.id;
    if (value === "login") {
        Login();
    }
});

function LoadNewSevenGreenID()
{
    if(sevengreenid.value == "deepanraj" && email.value == "deepanrajc2005@gmail.com" &&
    sevengreenid.value == "4914633446" && password == "deepanraj2005")
    {
        window.location = "main.html";
    }
    else
    {
        invalid.classList.add("live");
        setTimeout("out()",3000)
    }
}

function out() {
    invalid.classList.remove("live");
}