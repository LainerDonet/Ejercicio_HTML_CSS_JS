const generateButton = document.getElementById("generatebutton");
const copyButton = document.getElementById("copybutton");
const show = document.querySelector(".show");
const passwordInput = document.getElementById("password");

generateButton.onclick = function generatePassword(){

    const character = "abcdfghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*_";
    const pwdLength = 16;
    let password = "";

    for (let i = 0; i < pwdLength; i++) {
        let generatePwd = Math.floor(Math.random() * character.length);
        password += character.substring(generatePwd, generatePwd +1);
    }
    passwordInput.value = password;

};

copyButton.onclick = function copyPwd() {
    const passwordValue = passwordInput.value;
    if (passwordValue.trim() === "") {
        alert("No se ha generado una contraseñas, aun");
        
    }else{
        navigator.clipboard.writeText(passwordValue).then(function () {
            show.innerHTML = "Tu nueva contraseña es: <br> " + passwordValue;
            show.classList.add("active");
            setTimeout(()=>{
                show.classList.remove("active");
            },2000);
            passwordInput.value = "";
        })
    }
}