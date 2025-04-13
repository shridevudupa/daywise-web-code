const emailError = document.getElementById("email-error");
const passError = document.getElementById("pass-error");

function validateemail() {
    const email = document.getElementById('content-email').value.trim();
    if (email.length === 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.innerHTML = "Please enter a valid email";
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle" style="color: green;"></i>';
    return true;
}

function validatepass() {
    const pass = document.getElementById('content-pass').value;
    if (pass.length === 0) {
        passError.innerHTML = "Password is required";
        return false;
    }
    if (pass.length < 8) {
        passError.innerHTML = "Password must be at least 8 characters";
        return false;
    }
    passError.innerHTML = '<i class="fas fa-check-circle" style="color: green;"></i>';
    return true;
}

// Toggle password visibility
const togglepass = document.getElementById('toggle');
const passInput = document.getElementById('content-pass');

togglepass.addEventListener('click', () => {
    if (passInput.type === 'password') {
        passInput.type = 'text';
        togglepass.classList.remove('fa-eye');
        togglepass.classList.add('fa-eye-slash');
    } else {
        passInput.type = 'password';
        togglepass.classList.remove('fa-eye-slash');
        togglepass.classList.add('fa-eye');
    }
});

// Form submission
document.getElementById('box').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const emailValid = validateemail();
    const passValid = validatepass();

    if (emailValid && passValid) {
        const button = event.target.querySelector('button');
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
        button.disabled = true;

        // Simulate API call
        setTimeout(() => {
            window.location.href = 'Homepage.html';
        }, 1500);
    }
});