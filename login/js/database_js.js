function database() {
    //Declaration
    const sevengreenid = login_sevengreenid.value;
    const username = login_username.value;
    const password = login_password.value;
    
    //SevenGreenID
    if (sevengreenid == "9985670779") {
        if (username == "ajaysaagar" && password == "01032022") {
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