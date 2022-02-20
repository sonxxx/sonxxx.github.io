const loginForm = document.querySelector("#login_form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const todo_all = document.querySelector("#todo_all");
const weather = document.querySelector("#weather");
const quote_part = document.querySelector("#quote");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function loginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;

  localStorage.setItem(USERNAME_KEY, userName);
  printGreeting(userName);
}

function printGreeting(userName){
  greeting.innerText = `Hello, ${userName}\nHave a nice day ! 🥰`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todo_all.classList.remove(HIDDEN_CLASSNAME);
  weather.classList.remove(HIDDEN_CLASSNAME);
  quote_part.classList.remove(HIDDEN_CLASSNAME);
}

const saveUserName = localStorage.getItem(USERNAME_KEY);
console.log(saveUserName);

if(saveUserName === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",loginSubmit);
}else {
  
  printGreeting(saveUserName);
}