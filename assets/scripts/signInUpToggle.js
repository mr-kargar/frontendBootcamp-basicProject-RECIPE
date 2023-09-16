const toggle = document.getElementById('toggle-login');
const signInForm = document.getElementById('signIn-form');
const signInHeader = document.getElementById('signIn-header');
const signUpForm = document.getElementById('signUp-form');
const signUpHeader = document.getElementById('signUp-header');

toggle.onchange = ()=>{
    if(toggle.checked){
        signInForm.style.display = 'none';
        signInHeader.style.display = 'none';
        signUpForm.style.display = 'flex';
        signUpHeader.style.display = 'block';
    }else{
        signInForm.style.display = 'flex';
        signInHeader.style.display = 'block';
        signUpForm.style.display = 'none';
        signUpHeader.style.display = 'none';
    }

}