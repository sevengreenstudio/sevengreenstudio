let newsevengreenid = Math.floor(Math.random() * 9999999999) + 1111111111;

const register_sevengreenid = document.querySelector(".sevengreenid_field_register");

register_sevengreenid.value = newsevengreenid;

function checkexistance() {
    for (let i = 0; i <= sevengreenID.length; i++) {
        if (newsevengreenid == sevengreenID[i]) {
            newsevengreenid = Math.floor(Math.random() * 9999999999) + 1111111111;
        }
        register_sevengreenid = newsevengreenid;
    }
}