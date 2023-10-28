const errorMessage = document.querySelector(".form p");
const inputBox = document.querySelectorAll(".input-field");
const inputArea = document.querySelector(".input-field");
const submitButton = document.querySelector("#submitt");

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function inputValidation(){
    
}
inputBox.forEach(function(input,index) {
    
    inputArea.addEventListener("input", ()=>{
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
            // console.log(input);
            customError(index,input)
            validated=false;
        }
        else{
      
            input.classList.add("hide-error-icon");
            var paragraph = input.closest(".input-container");
            var par =paragraph.querySelector("p");
            par.classList.add("hide-error-message");
           

        }
        index++;
       
        
    });
    if(validated ){
        document.querySelector("form").submit();
      
    }
    
    
 
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
