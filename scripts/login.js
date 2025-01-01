document.addEventListener("DOMContentLoaded", () => {
    const toggleRegisterPass = document.getElementById('toggleRegisterPass');
    const toggleLoginPass = document.getElementById('toggleLoginPass');
    const showRegisterFormBtn = document.getElementById('showRegisterForm');
    const showLoginFormBtn = document.getElementById('showLoginForm');
    const container = document.getElementById('container');

    // Toggle password visibility
    toggleRegisterPass.addEventListener('click', () => {
        const passwordField = document.getElementById('registerPassword');
        const icon = toggleRegisterPass;
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            icon.classList.remove('bi-eye');
            icon.classList.add('bi-eye-slash');
        } else {
            passwordField.type = 'password';
            icon.classList.remove('bi-eye-slash');
            icon.classList.add('bi-eye');
        }
    });

    toggleLoginPass.addEventListener('click', () => {
        const passwordField = document.getElementById('loginPassword');
        const icon = toggleLoginPass;
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            icon.classList.remove('bi-eye');
            icon.classList.add('bi-eye-slash');
        } else {
            passwordField.type = 'password';
            icon.classList.remove('bi-eye-slash');
            icon.classList.add('bi-eye');
        }
    });

    // Show register form
    showRegisterFormBtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    // Show login form
    showLoginFormBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });

    // Form submission handling
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;
        alert('Đăng nhập thành công');
    });

    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const log_Name = document.getElementById('log_Name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const registerPassword = document.getElementById('registerPassword').value;
        // Handle register logic here (e.g., fetch API, etc.)
        alert('Đăng ký thành công');
    });
});
