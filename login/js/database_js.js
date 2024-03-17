function database() {
    //Declaration
    const sevengreenid = login_sevengreenid.value;
    const username = login_username.value;
    const password = login_password.value;

    //SevenGreenID
    if (sevengreenid == "0123456789") {
        if (username == "ajaysaagar" && password == "01032022") {
            btn_login.innerHTML = "Loading...";
            window.location = "main.html";
        }
        else {
            btn_login.innerHTML = "INVALID User or password";

        }
        //SevenGreenID
        if (sevengreenid == "4950142745") {
            if (username == "deepanraj" && password == "deepanraj2005") {
                btn_login.innerHTML = "Loading...";
                window.location = "main.html";
            }
            else {
                btn_login.innerHTML = "INVALID User or password";
            }
        }
        //Else Part
        else {
            btn_login.innerHTML = "INVALID User or password";
        }
    }
}