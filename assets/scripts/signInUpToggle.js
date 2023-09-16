const toggle = document.getElementById('toggle-login');
const signInForm = document.getElementById('signIn-form');
const signInHeader = document.getElementById('signIn-header');
const signUpForm = document.getElementById('signUp-form');
const signUpHeader = document.getElementById('signUp-header');
const toggleLoginSignIn = document.getElementById('toggle-login-signIn');
const toggleLoginSignUp = document.getElementById('toggle-login-signUp');

toggle.onchange = ()=>{
    if(toggle.checked){
        signInForm.style.display = 'none';
        signInHeader.style.display = 'none';
        signUpForm.style.display = 'flex';
        signUpHeader.style.display = 'block';
        toggleLoginSignIn.style.color = '#848A8D';
        toggleLoginSignUp.style.color = '#000000';
    }else{
        signInForm.style.display = 'flex';
        signInHeader.style.display = 'block';
        signUpForm.style.display = 'none';
        signUpHeader.style.display = 'none';
        toggleLoginSignUp.style.color = '#848A8D';
        toggleLoginSignIn.style.color = '#000000';
    }

}