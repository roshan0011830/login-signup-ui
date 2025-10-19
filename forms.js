console.log("form chalao");

let eyeIcon = document.getElementById("eyeIcon");

let passInput = document.getElementById("input2Inp")
console.log(passInput)

console.log(eyeIcon)

function togglePassword(){
    console.log("ho gya click eye")

    let currentAttribute = passInput.getAttribute("type");
    console.log(currentAttribute)

    if(currentAttribute === "password"){
        passInput.setAttribute("type", "text");
        eyeIcon.setAttribute("class", "fa-solid fa-eye")
        eyeIcon.style.color = "black"
    }
    else if(currentAttribute === "text"){
        passInput.setAttribute("type", "password")
        eyeIcon.setAttribute("class", "fa-solid fa-eye-slash")
        eyeIcon.style.color = "black"
    }
    


   
}

eyeIcon.addEventListener("click", togglePassword)