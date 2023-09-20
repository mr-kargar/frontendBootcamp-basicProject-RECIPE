const toggle = document.getElementById("toggle-login");
const signInForm = document.getElementById("signIn-form");
const signInHeader = document.getElementById("signIn-header");
const signUpForm = document.getElementById("signUp-form");

const signUpHeader = document.getElementById("signUp-header");
const toggleLoginSignIn = document.getElementById("toggle-login-signIn");
const toggleLoginSignUp = document.getElementById("toggle-login-signUp");

toggle.onchange = () => {
  if (toggle.checked) {
    signInForm.style.display = "none";
    signInHeader.style.display = "none";
    signUpForm.style.display = "flex";
    signUpHeader.style.display = "block";
    toggleLoginSignIn.style.color = "#848A8D";
    toggleLoginSignUp.style.color = "#000000";
  } else {
    signInForm.style.display = "flex";
    signInHeader.style.display = "block";
    signUpForm.style.display = "none";
    signUpHeader.style.display = "none";
    toggleLoginSignUp.style.color = "#848A8D";
    toggleLoginSignIn.style.color = "#000000";
  }
};

async function signUp(URL, user) {
  const response = await fetch(`http://localhost:8080/${URL}`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return response.json();
}

signUpForm.onsubmit = (event) => {
  event.preventDefault();
  if (!signUpForm[5].checked) {
    signUpForm[5].labels[0].style.border = "2px solid red";
  } else if (signUpForm[3].value != signUpForm[4].value) {
    signUpForm[3].style.border = "2px solid red";
    signUpForm[4].style.border = "2px solid red";
  } else if (
    signUpForm[5].checked &&
    signUpForm[3].value === signUpForm[4].value
  ) {
    const user = {
      firstName: signUpForm[0].value,
      lastName: signUpForm[1].value,
      email: signUpForm[2].value,
      password: signUpForm[3].value,
    };

    signUp("sign-up", user).then((user) => {
      if (user.success) {
        console.log(user);
        alert("user sabt shod");
        signUpForm.reset();
      }
    });
  }
};

function signIn() {
  let forData = new FormData(signInForm);

  const xHttp = new XMLHttpRequest();

  xHttp.open("POST", `http://127.0.0.1:8080/api/login`);
  xHttp.withCredentials = true;
  xHttp.send(forData);
  
}

signInForm.onsubmit = (event) => {
  event.preventDefault();
  signIn();
};


