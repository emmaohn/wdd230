let ham = document.getElementById("hambutton");

ham.addEventListener("click", () => {
    let x = document.getElementById("navUl");
    let y = document.getElementById("hambutton");
    if (y.style.display === "none") {
        x.style.display = "flex";
    } else {
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        } 
    }
});

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const today = new Date();
// document.getElementById('year').textContent = today.getFullYear();
document.getElementById('todays-date').textContent = `${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;