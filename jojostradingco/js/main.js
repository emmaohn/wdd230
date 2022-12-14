function myFunction() {
    var x = document.getElementById("navUl");
    if (screen.width === "60em") {
        x.style.display = "flex";
        x.style.overflow = "hidden";
    } else if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const today = new Date();
// document.getElementById('year').textContent = today.getFullYear();
document.getElementById('todays-date').textContent = `${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;