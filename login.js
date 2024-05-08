/*the login function */
const subbtn = document.getElementById("sub");
const required = document.getElementsByClassName("required")

subbtn.addEventListener("click", () => {/*the function will called when the user clicks on the button  */
    let inputdata = true
    for (const input of required) {
        if (input.value.trim() === "") {/*over here  the computor will check that if the user have typed in something or not  */
            inputdata = false;
            break;
        }
    }
    if(!inputdata ){
        alert("Something went wrong ");/*if their is nothing this pop will come */
    }
    else {
        alert("You are logged IN ");/*if there is something then this pop will come  */

    } 
})