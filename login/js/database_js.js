function database() {
    //Declaration
    const sevengreenid = login_sevengreenid.value;
    const username = login_username.value;
    const password = login_password.value;
    
    //SevenGreenID
    if (sevengreenid == "6385776502") {
        if (username == "ajaysaagar" && password == "2024") {
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