function ignore() {
    document.cookie = "allow_cookies=False; max-age=600;SameSite=None; Secure; path=/";
    document.getElementById("cookies_modal").remove();

}

function allow() {
    document.cookie = "allow_cookies=True;SameSite=None;expires=Fri, 31 Dec 9999 23:59:59 GMT; Secure; path=/";
    document.getElementById("cookies_modal").remove();

}

function reject() {
    document.cookie = "allow_cookies=False;SameSite=None;expires=Fri, 31 Dec 9999 23:59:59 GMT; Secure; path=/";
    document.getElementById("cookies_modal").remove();
}