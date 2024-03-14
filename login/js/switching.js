const bgd = document.querySelector(".bgd");

const login = document.querySelector(".login");
const register = document.querySelector(".register");

bgd.addEventListener("click", event => {
    const value = event.target.dataset.id;

    if (value == "tologin") {
        login.classList.add("live");
        register.classList.remove("live");
    }
    else if (value == "toregister") {
        login.classList.remove("live");
        register.classList.add("live");
    }
});