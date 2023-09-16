const passwordShow = document.getElementById("password-show");
const passwordHidden = document.getElementById("password-hidden");
const signInPassword = document.getElementById("signInPassword");

passwordShow.onclick = () => {
  signInPassword.type = "text";
  passwordShow.style.display = 'none';
  passwordHidden.style.display= 'inline-block';
}

passwordHidden.onclick = () => {
    signInPassword.type = "password";
    passwordShow.style.display = 'inline-block';
    passwordHidden.style.display= 'none';
  }
