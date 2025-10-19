console.log("Signup form eye icons working...");

// Select both password fields and their eye icons
let eyeIcon3 = document.getElementById("eyeIcon3");
let eyeIcon4 = document.getElementById("eyeIcon4");

let passInput3 = document.getElementById("input3Inp");
let passInput4 = document.getElementById("input4Inp");

// Function to toggle Create Password visibility
function toggleCreatePass() {
    let type = passInput3.getAttribute("type");
    if (type === "password") {
        passInput3.setAttribute("type", "text");
        eyeIcon3.setAttribute("class", "fa-solid fa-eye");
        eyeIcon3.style.color = "black"
    } else {
        passInput3.setAttribute("type", "password");
        eyeIcon3.setAttribute("class", "fa-solid fa-eye-slash");
        eyeIcon3.style.color = "grey"
    }
}

// Function to toggle Confirm Password visibility
function toggleConfirmPass() {
    let type = passInput4.getAttribute("type");
    if (type === "password") {
        passInput4.setAttribute("type", "text");
        eyeIcon4.setAttribute("class", "fa-solid fa-eye");
        eyeIcon4.style.color = "black"
    } else {
        passInput4.setAttribute("type", "password");
        eyeIcon4.setAttribute("class", "fa-solid fa-eye-slash");
        eyeIcon4.style.color = "grey"
    }
}

// Add event listeners for both
eyeIcon3.addEventListener("click", toggleCreatePass);
eyeIcon4.addEventListener("click", toggleConfirmPass);
