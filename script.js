function toggleSettings() {
    const panel = document.getElementById("settingsPanel");
    panel.style.display = panel.style.display === "block" ? "none" : "block";
}

function enlargeText() {
    document.body.style.fontSize = "18px";
}

function normalText() {
    document.body.style.fontSize = "16px";
}
