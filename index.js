const errorMessage = document.querySelector(".email-error");
const inputBox = document.querySelectorAll(".input-field");
const inputArea = document.querySelectorAll(".input-field");
const submitButton = document.querySelector("#submitt");
const emailInput = document.querySelector("#email-input");
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function inputValidation(){
    
}
inputArea.forEach(function(input,index) {
    
    input.addEventListener("input", ()=>{
        const checkInputField = input.value.trim() === "";
        if (checkInputField){
            console.log(index);
            customError(index,input)
        }
        else{
            console.log(index);
            input.classList.add("hide-error-icon");
            var paragraph = input.closest(".input-container");
            var par =paragraph.querySelector("p");
            par.classList.add("hide-error-message");
        }
       
    })
    
});
submitButton.addEventListener("click", (event)=>{
    // alert("error");
    event.preventDefault();
    let index =0
    var validated= true;

    inputBox.forEach(function(input,index) {
        const checkInputField = input.value.trim() === "";
        if (checkInputField){
            customError(index,input)
            validated=false;
        }
       
        index++;
       
        
    });
   
    if(validated){
        document.querySelector("form").submit();
      
    }
    
    
 
})
emailInput.addEventListener("input", (index,input)=>{
    const emailValid = emailInput.value.trim() === "" ||regex.test(emailInput.value) ;

    if (emailValid){
        emailInput.classList.remove("show-error-icon");
        errorMessage.classList.remove("show-error-message");
       
        
    }
    else{
        emailInput.classList.add("show-error-icon");
        errorMessage.classList.add("show-error-message");
        
    }
    
})
function validationError (index,input){
    var paragraph = input.closest(".input-container");
    input.classList.add("show-error-icon");
    var par =paragraph.querySelector("p");
    par.classList.add("show-error-message");
    console.log(par);
    input.classList.remove("hide-error-icon");
    var paragraph = input.closest(".input-container");
    var par =paragraph.querySelector("p");
    par.classList.remove("hide-error-message");
}
function customError(key,input){
    switch (key) {
        case 0 :
            validationError(key,input);
            
            break;
        case 1 :
            validationError(key,input);
            break;
        case 2 :
            validationError(key,input);       
            break;
        case 3 :
            validationError(key,input);
            break;

        default:
            alert("oops an error occured");
            break;
    }
}
