function toggleTheme() {
    document.body.classList.toggle("lightmode");
    let btn = document.getElementById("themeButton");
    if (document.body.classList.contains("lightmode")) {
        btn.textContent = "🌙";
    } else {
        btn.textContent = "☀️";
    }
}