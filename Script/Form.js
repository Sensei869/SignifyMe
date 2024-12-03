const forms =document.getElementById('forms');
const username =document.getElementById('username');
const email =document.getElementById('email');
const password =document.getElementById('password');
const confirmpass =document.getElementById('Confirmpass');

forms.addEventListener('submit', (e) =>{

    console.log('Submit');
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const confirmpassValue = confirmpass.value.trim();

    if(usernameValue === ''){
        //show error
        //add error class
        setErrorfor(username, 'fullname shouldnot be blank');
    }
    else{
        //add success class
        setSuccessFor(username);
    }


    if(emailValue === ''){
        //show error
        //add error class
        setErrorfor(email, 'email shouldnot be blank');
    }
    else if(!isEmail(emailValue)) {
        setErrorfor(email, 'Email is not valid');
    }

    else{

        setSuccessFor(email);
    }

    if(passwordValue === ''){
        //show error
        //add error class
        setErrorfor(password, 'password shouldnot be blank');
    }
    else{
        setSuccessFor(password);
    }

    if(confirmpassValue === ''){
        //show error
        //add error class
        setErrorfor(confirmpass, 'Confirm Password shouldnot be blank');
    } else if(passwordValue !== confirmpassValue){
        setErrorfor(confirmpass, 'Password Doesnot Match')

    }
    else{
        setSuccessFor(confirmpass);
    }

}

function setErrorfor(input, message) {
    const formsGroup = input.parentElement;
    const small = formsGroup.querySelector('small');

    //adding error message
    small.innerText = message;

    //add error Class
    formsGroup.className = 'form-group error';
}


function setSuccessFor(input){
    const formsGroup = input.parentElement;
    formsGroup.className = 'form-group success';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}