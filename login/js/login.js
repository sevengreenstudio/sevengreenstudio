//Login Page
const login_sevengreenid = document.querySelector(".login_sevengreenid");
const login_username = document.querySelector(".login_username");
const login_password = document.querySelector(".login_password");

//buttons
const btn_findid = document.querySelector(".btn_findid");
const btn_login = document.querySelector(".btn_login");

//getted
const getted = document.querySelector(".getted");

const invalid = document.querySelector(".invalid");
//SevenGreenID
let sevengreenID = [];
sevengreenID[0] = "6385776502";
sevengreenID[1] = "9698758994";

function getdata() {
    for (let i = 0; i <= sevengreenID.length; i++) {
        if (login_sevengreenid.value == sevengreenID[i]) {
            getted.classList.add("live");
            btn_findid.classList.remove("live");
            btn_login.classList.add("live");
            login_sevengreenid.style.color = "gray";
            invalid.classList.add("live");
        }
        if (i == sevengreenID.length) {
            btn_findid.innerHTML = "Not Found";
        }
    }
}

function gettedtofindid() {
    //gettedtofindid
    if (getted.classList = "getted live") {
        getted.classList.remove("live");
        btn_login.classList.remove("live");
        btn_findid.classList.add("live");
        btn_findid.innerHTML = "Find-ID";
        invalid.classList.remove("live");
    }
}

function resetloginbutton()
{
    btn_login.innerHTML = "Login";
}

function process() {
    const username = login_username.value;
    const password = login_password.value;

    if(login_sevengreenid.value == "6385776502")
    {
        if(username == "ajaysaagar" && password == "2024")
        {
            window.location = "main.html";
        }
        else
        {
            btn_login.innerHTML = "INVALID User or password";
        }
    }
}