function toggleTheme() {
    document.body.classList.toggle("lightmode");
    let btn = document.getElementById("themeButton");
    if (document.body.classList.contains("lightmode")) {
        btn.innerHTML = '<img src="static/lua.png" alt="Dark mode" width="40" height="40">';
    } else {
        btn.innerHTML = '<img src="static/sun.png" alt="Dark mode" width="40" height="40">';
    }
}