let date = document.getElementById("date");
const display = document.getElementById("result");
let checker = document.getElementById("checker");
checker.addEventListener("click", datechecker);
function randomdate() {
    let randomd = Math.floor(Math.random() * 30) + 1;
    let randomm = Math.floor(Math.random() * 12) + 1;
    return `${randomd} - ${randomm} - 2024`;

}


/*the data checker function  */
function datechecker() {

    const userDate = String(date.value);
    const randomedate = randomdate();
    if (userDate === randomedate) {
        display.innerHTML = "Sorry this date is not available"
    }
    else if (userDate == "20-1-2024") {
        display.innerHTML = "Sorry this date is not available"
    }
    else if (userDate == "23-5-2024") {
        display.innerHTML = "Sorry this date is not available"
    }
    else if (userDate == "20/1/2024") {
        display.innerHTML = "Sorry this date is not available"
    }
    else if (userDate == "23/5/2024") {
        display.innerHTML = "Sorry this date is not available"
    }
    else if (userDate == "25/12/2024") {
        display.innerHTML = "Sorry this date is not available"
    }
    else if (userDate == "1/1/2024") {
        display.innerHTML = "Sorry this date is not available"
    }
    else {
        display.innerHTML = "This date is available"
    }

} 
/*for the booking function  */
const subbtn = document.getElementById("subbtn");
const required = document.getElementsByClassName("required")

subbtn.addEventListener("click", () => {
    let inputdata = true
    for (const input of required) {
        if (input.value.trim() === "") {
            inputdata = false;
            break;
        }
    }
    if (!inputdata) {
        alert("Something went wrong ");
    }
    else {
        alert("We have recived your booking and you will recive a mail with the booking recipt with in 1 hour ");

    }
})