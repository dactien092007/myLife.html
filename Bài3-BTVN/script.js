const media = window.matchMedia("(max-width: 768px)");

function handleScreen(e) {
    if (e.matches) {
        console.log("Mobile");
    } else {
        console.log("Desktop");
    }
}

handleScreen(media);
media.addEventListener("change", handleScreen);