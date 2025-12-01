// script.js
function openForm() {
    document.getElementById("intake-form").style.display = "block";
}

function closeForm() {
    document.getElementById("intake-form").style.display = "none";
}

// Wait until the page is fully loaded, then attach the clicks
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start-bttn").onclick = openForm;
    document.getElementById("cubttn").onclick = openForm;
    
    // If you have a close button with id="xbttn"
    let closeBtn = document.getElementById("xbttn");
    if (closeBtn) {
        closeBtn.onclick = closeForm;
    }
});
