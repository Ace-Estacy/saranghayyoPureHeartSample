
/*for the querry function  */
const subbtn = document.getElementById("sbtn");
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
        alert("pls fill all the fields");
    }
    else {
        alert(" We have got your querry we will get back to you within 24hours ");

    }
})
/*learned gsap and scroll animation from linkedin learning and youtube  */