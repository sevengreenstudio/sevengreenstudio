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

area.addEventListener("click", event => {
    const value = event.target.dataset.id;
    if (value === "login") {
        Login();
    }
});

function Login() {
    if (sevengreenid.value == "0007225390" &&
        username.value == "ajaysaagar" &&
        email.value == "kalpanaajaysagar2004@gmail.com" &&
        password.value == "2024") {
        //Field
        window.location = "main.html";
    }
    else
    {
        invalid.classList.add("live");
        setTimeout("out()",5000);
    }
}

function out()
{
    invalid.classList.remove("live");
}