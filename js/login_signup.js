<<<<<<< Updated upstream
// Opens sticky-chat automatically within 5 seconds of page load
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("offchat-menu").checked = true;
  }, 5000);
});

const signInBtn = document.querySelector("#signIn");
const signUpBtn = document.querySelector("#signUp");
const fistForm = document.querySelector("#form1");
const secondForm = document.querySelector("#form2");
const container = document.querySelector(".container");

if (localStorage.getItem("token") !== null && localStorage.getItem("token") !== "") {
  window.location.href = "welcome.html";
}

if (localStorage.getItem("token") == null && localStorage.getItem("token") == "") {
  window.location.href = "index.html";
}

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => handleLogin(e));

async function handleLogin(e) {
  e.preventDefault();

  const emailInput = e.target.querySelector("input[type='text']");
  const passwordInput = e.target.querySelector("input[type='password']");

  if (!emailInput || !passwordInput) {
    console.error("Input fields not found");
    return;
  }

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email || !password) {
    alert("Please enter both username and password.");
    return;
  }

  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error("Login failed! Please check your credentials.");
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);
    alert("Login successful!");
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}
=======
const forms= document.querySelector(".forms"),
    pwShowHide= document.querySelectorAll(".eye-icon"),
    links= document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
            pwFields.forEach(password => {
                if(password.type === "password") {
                    password.type = "text";
                    eyeIcon.classList.replace("bx-hide", "bx-show");
                    return;
                }
                password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            });
    })
})

links.forEach(links => {
    links.addEventListener("click", e => {
        e.preventDefault(); 
        forms.classList.toggle("show-signup");
    })
})
>>>>>>> Stashed changes
