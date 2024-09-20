import { User } from "../model/user-model";
import { login } from "../service/user-service";

window.addEventListener('load', bindEvents);

function takeUserInput(){
const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;
const name = document.querySelector('#name').value;

const user = new User(email, password, name);
login(user);
}

function bindEvents(){
    document.querySelector("#go").addEventListener("click",takeUserInput);
}