const nameError=document.getElementById("name-error");
function validatename(){
    const name=document.getElementById('content-name').value;
    if(name.length===0){
        nameError.innerHTML="name is required";
        return false
    }
    if(!name.match(/^[A-Za-z]+(\s[A-Z-a-z]+)+$/)){
        nameError.innerHTML="Write full name";
        return false;
    }
    nameError.innerHTML="Correct";
    return true;
}

const eamilError=document.getElementById("email-error");
function validateemail(){
    const email=document.getElementById('content-email').value;
    if(email.length===0){
        eamilError.innerHTML="email is required";
        return false
    }
    if(!email.match(/^[^\s@]+@[^s@]+\.[^\s@]+$/)){
        eamilError.innerHTML="invalid email";
        return false;
    }
    eamilError.innerHTML="Correct";
    return true;
}

const passError=document.getElementById("pass-error");
function validatepass(){
    const pass=document.getElementById('content-pass').value;
    if(pass.length<=8){
        passError.innerHTML="enter atleast 8 characters";
        return false;
    }
    if(!pass.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)){
        passError.innerHTML="invalid password";
        return false;
    }
    passError.innerHTML="Correct";
    return true;
}

const passInput=document.getElementById('content-pass');
const togglepass=document.getElementById('toggle')
togglepass.addEventListener('click',()=>{
    const ispassword=passInput.type==='password';
    if(ispassword){
        passInput.type="text"
    }
    else{
        passInput.type='password'
    }
});

document.getElementById('box').addEventListener('submit',(event)=>{
    event.preventDefault();
    const nameValid=validatename();
    const emailValid=validateemail();
    const passValid=validatepass();
    if(nameValid && emailValid&&passValid){
        alert("Form submitted successfully");
        setTimeout(()=>{
            window.location.href='Homepage.html'
        },1000);
    }
})