const passwordShow = document.getElementById("password-show");
const passwordHidden = document.getElementById("password-hidden");
const signInPassword = document.getElementById("signInPassword");

passwordShow.onclick = () => {
  signInPassword.type = "text";
  passwordShow.style.display = "none";
  passwordHidden.style.display = "inline-block";
};

passwordHidden.onclick = () => {
  signInPassword.type = "password";
  passwordShow.style.display = "inline-block";
  passwordHidden.style.display = "none";
};

const passwordSignUpShow = document.getElementById("password-signUp-show");
const passwordSignUpHidden = document.getElementById("password-signUp-hidden");
const signUpPassword = document.getElementById("signUpPassword");


passwordSignUpShow.onclick = ()=>{
  signUpPassword.type='text';
  passwordSignUpShow.style.display = "none";
  passwordSignUpHidden.style.display = "inline-block";
}

passwordSignUpHidden.onclick = ()=>{
  signUpPassword.type='password';
  passwordSignUpShow.style.display = "inline-block";
  passwordSignUpHidden.style.display = "none";
}


const passwordConfirmSignUpShow = document.getElementById("passwordConfirm-signUp-show");
const passwordConfirmSignUpHidden = document.getElementById("passwordConfirm-signUp-hidden");
const confirmPassword = document.getElementById("confirmPassword");


passwordConfirmSignUpShow.onclick = ()=>{
  confirmPassword.type='text';
  passwordConfirmSignUpShow.style.display = "none";
  passwordConfirmSignUpHidden.style.display = "inline-block";
}

passwordConfirmSignUpHidden.onclick = ()=>{
  confirmPassword.type='password';
  passwordConfirmSignUpShow.style.display = "inline-block";
  passwordConfirmSignUpHidden.style.display = "none";
} 