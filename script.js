












const form = document.getElementById('forms')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const confirmpassword_input = document.getElementById('confirmpassword-input')

form.addEventListener('submit', (e) => {
  // e.preventDefault() prevent submit

  let errors = []

  if(firstname_input){
    errors = getSignupFormErrors(firstname_input.ariaValueMax. email_input.value, password_input.value, confirmpassword_input.value)
  }
  else{

    errors = getLoginFormErrors(email_input.value, password_input.value)
  }
  
})