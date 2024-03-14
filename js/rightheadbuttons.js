const home = document.querySelector(".bgd .home");
const updates = document.querySelector(".bgd .updates");
const games = document.querySelector(".bgd .games");
const sevengreenid = document.querySelector(".bgd .sevengreenid");
const account = document.querySelector(".bgd .account");

addEventListener("click",event=>{
    const value = event.target.dataset.id;

    if(value == "home")
    {
        home.classList.add("live");
        updates.classList.remove("live");
        games.classList.remove("live");
        sevengreenid.classList.remove("live");
        account.classList.remove("live");
    }
    else if(value == "updates")
    {
        home.classList.remove("live");
        updates.classList.add("live");
        games.classList.remove("live");
        sevengreenid.classList.remove("live");
        account.classList.remove("live");
    }
    else if(value == "games")
    {
        home.classList.remove("live");
        updates.classList.remove("live");
        games.classList.add("live");
        sevengreenid.classList.remove("live");
        account.classList.remove("live");
    }
    else if(value == "sevengreenid")
    {
        home.classList.remove("live");
        updates.classList.remove("live");
        games.classList.remove("live");
        sevengreenid.classList.add("live");
        account.classList.remove("live");
    }
    else if(value == "account")
    {
        home.classList.remove("live");
        updates.classList.remove("live");
        games.classList.remove("live");
        sevengreenid.classList.remove("live");
        account.classList.add("live");
    }
});