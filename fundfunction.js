
/*for the payment of fundreser  */
const requiredInputs = document.getElementsByClassName("required");
const sbtn = document.getElementById("subbtn");

sbtn.addEventListener("click", () => {
    let userInput = true;

    for (let i = 0; i < requiredInputs.length; i++) {
        const input = requiredInputs[i];

        if (input.value.trim() === "") {
            userInput = false;
            break; 
        }
    }       

    if (!userInput) { /*! is not oprater if the above value is not true then this if statment will run but if it is not true elese statment will exicute  */
        alert("Something went wrong. Please fill in all required fields.");
    } else {
        alert("Thank you for your support. You will receive an email receipt of your payment in 24 hours.");
    }
});