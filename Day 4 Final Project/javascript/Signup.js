// Get error message elements
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passError = document.getElementById("pass-error");

// Validate name with clear error display
function validatename() {
    const name = document.getElementById('content-name').value.trim();
    nameError.style.opacity = '1'; // Show error message
    nameError.style.transform = 'translateY(0)';
    
    if (!name) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (name.length < 3) {
        nameError.innerHTML = "Name must be at least 3 characters";
        return false;
    }
    if (!name.includes(' ') || !/^[A-Za-z\s]+$/.test(name)) {
        nameError.innerHTML = "Please enter your full name (first & last name)";
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle" style="color: green;"></i>';
    return true;
}

// Validate email with clear error display
function validateemail() {
    const email = document.getElementById('content-email').value.trim();
    emailError.style.opacity = '1'; // Show error message
    emailError.style.transform = 'translateY(0)';
    
    if (!email) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    // Simple email validation
    if (!email.includes('@') || !email.includes('.') || email.length < 5) {
        emailError.innerHTML = "Please enter a valid email";
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle" style="color: green;"></i>';
    return true;
}

// Validate password with clear error display
function validatepass() {
    const pass = document.getElementById('content-pass').value;
    passError.style.opacity = '1'; // Show error message
    passError.style.transform = 'translateY(0)';
    
    if (!pass) {
        passError.innerHTML = "Password is required";
        return false;
    }
    if (pass.length < 8) {
        passError.innerHTML = "Password must be at least 8 characters";
        return false;
    }
    if (!/[A-Z]/.test(pass)) {
        passError.innerHTML = "Password must contain at least one uppercase letter";
        return false;
    }
    if (!/[a-z]/.test(pass)) {
        passError.innerHTML = "Password must contain at least one lowercase letter";
        return false;
    }
    if (!/[0-9]/.test(pass)) {
        passError.innerHTML = "Password must contain at least one number";
        return false;
    }
    if (!/[^A-Za-z0-9]/.test(pass)) {
        passError.innerHTML = "Password must contain at least one special character";
        return false;
    }
    passError.innerHTML = '<i class="fas fa-check-circle" style="color: green;"></i>';
    return true;
}

// Add input event listeners for real-time validation
document.getElementById('content-name').addEventListener('input', validatename);
document.getElementById('content-email').addEventListener('input', validateemail);
document.getElementById('content-pass').addEventListener('input', validatepass);

// Toggle password visibility
const togglepass = document.getElementById('toggle');
const passInput = document.getElementById('content-pass');

togglepass.addEventListener('click', () => {
    const isPassword = passInput.type === 'password';
    passInput.type = isPassword ? 'text' : 'password';
    togglepass.classList.toggle('fa-eye');
    togglepass.classList.toggle('fa-eye-slash');
});

// Form submission
document.getElementById('box').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate all fields
    const isNameValid = validatename();
    const isEmailValid = validateemail();
    const isPassValid = validatepass();

    if (isNameValid && isEmailValid && isPassValid) {
        const button = this.querySelector('button');
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
        button.disabled = true;

        // Simulate API call
        setTimeout(() => {
            alert("Account created successfully!");
            window.location.href = 'Homepage.html';
        }, 1500);
    } else {
        // Show all errors
        validatename();
        validateemail();
        validatepass();
    }
});