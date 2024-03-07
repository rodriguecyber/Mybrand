let validateName = (input)=>{
    input.setCustomValidity("")
    if(input.validity.patternMismatch){
     input.setCustomValidity("Invalid Name")}
}
let validateEmail = (input)=>{
    input.setCustomValidity("")
    if(input.validity.patternMismatch){
     input.setCustomValidity("Invalid Email")}
}