const errorMessage = document.querySelector(".form p");
const inputBox = document.querySelectorAll(".input-field");
const submitButton = document.querySelector("#submit");

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function inputValidation(){
    
}
submitButton.addEventListener("click", (event)=>{
    // alert("error");
    event.preventDefault();
    let index =0
    inputBox.forEach(function(input,index) {
        const checkInputField = input.value.trim() === "";
        if (checkInputField){

            console.log(input);
            customError(index,input)
        }
        else{
            alert("hello")
        }  
        index++;
    });
    
})
function customError(key,input){
    switch (key) {
        case 0 :
            var paragraph = input.closest(".input-container");
            input.classList.add("show-error-icon");
            var par =paragraph.querySelector("p");
            par.classList.add("show-error-message");
            console.log(par);
            break;
        case 1 :
            var paragraph = input.closest(".input-container");
            input.classList.add("show-error-icon");
            var par =paragraph.querySelector("p");
            par.classList.add("show-error-message");
            console.log(par);
            break;
        case 2 :
            var paragraph = input.closest(".input-container");
            input.classList.add("show-error-icon");
            var par =paragraph.querySelector("p");
            par.classList.add("show-error-message");
            console.log(par);
            break;
        case 3 :
            var paragraph = input.closest(".input-container");
            input.classList.add("show-error-icon");
            var par =paragraph.querySelector("p");
            par.classList.add("show-error-message");
            console.log(par);
            break;

        default:
            alert("error message");
            break;
    }
}
