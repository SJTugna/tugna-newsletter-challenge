document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector('form');
const dismissBtn = document.querySelector('.container2 button');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');

const errorMessage = document.getElementById("errorMessage");
const userEmail = document.getElementById("email");
const textEmail = document.querySelector('.textEmail');

function validateEmail(email){
    return /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(email);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = userEmail.value.trim();

    if(validateEmail(email)){
        textEmail.innerText = email;
        errorMessage.innerText = "";
        container.classList.add("hide");
        container2.classList.remove("hide");
        errorMessage.innerText = "";
    }

    else{
        errorMessage.innerText = "Valid email required";
        userEmail.classList.add("input-error");
    }
});

dismissBtn.addEventListener('click', (e) => {
    container.classList.remove("hide");
    container2.classList.add("hide");
    userEmail.value = "";
    userEmail.classList.remove("input-error");
    errorMessage.innerText = "";
});
});