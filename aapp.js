// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");
// const log_in_btn = document.querySelector("#log-in-btn");
// const register_btn = document.querySelector("#register-btn");


// sign_up_btn.addEventListener("click", async () => {
//   container.classList.add("sign-up-mode");
// });


// register_btn.addEventListener("click", async () => {
//   container.classList.add("sign-up-mode");
//   let name = document.querySelector("#name").value;
//   let email = document.querySelector("#email").value;
//   let password = document.querySelector("#signuppassword").value;
//   console.log(name, email, password);
//   if(!name){
//     alert("Please enter username");
//     return;
//   }
//   if(!email){
//     alert("Please enter email");
//     return;
//   }
//   if(!password){
//     alert("Please enter password");
//     return;
//   }
//   const registerResult = await fetch('http://localhost:3000/api/v1/auth/register', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       name,
//       email,
//       password
//     })
//   })
//   console.log(registerResult);
//   if(registerResult.ok){
//     const user = await registerResult.json();
//     console.log(user);
//     alert("Registration Successful");
//     window.location.href = "./index.html";
//   }else{
//     alert("Registration Failed");
//   }
// });

// log_in_btn.addEventListener("click", async() => {
//   container.classList.remove("sign-up-mode");
//   let userName = document.querySelector("#username").value;
//   let password = document.querySelector("#password").value;
//   console.log(userName, password);
//   if(!userName){
//     alert("Please enter username");
//     return;
//   }
//   if(!password){
//     alert("Please enter password");
//     return;
//   }
//   const loginResult = await fetch('http://localhost:3000/api/v1/auth/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       email:userName,
//       password
//     })
//   })
//   console.log(loginResult);
//   if(loginResult.ok){
//     const user = await loginResult.json();
//     console.log(user);
//     alert("Login Successful");
//     let token = user.token;
//   }else{
//     alert("Login Failed");
//     // Clear the form fields
//     document.querySelector("#username").value = "";
//     document.querySelector("#password").value = "";
//   }
// });
