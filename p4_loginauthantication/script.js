const signUp = document.getElementById('sign-up');
const signIn = document.getElementById('sign-in');
const loginIn = document.getElementById('login-in');
const loginUp = document.getElementById('login-up');
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const logoutBtn = document.getElementById('logout');
const loginPage = document.getElementById('login-page');
const dashboardPage = document.getElementById('dashboard-page');

// Toggle between sign-in and sign-up forms
signUp.addEventListener('click', () => {
    loginIn.classList.add('none');
    loginUp.classList.remove('none');
});

signIn.addEventListener('click', () => {
    loginUp.classList.add('none');
    loginIn.classList.remove('none');
});

// Sign up
signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

  
    loginPage.classList.add('none');
    dashboardPage.classList.remove('none');
});

// Sign in
signInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

   
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
     
        loginPage.classList.add('none');
        dashboardPage.classList.remove('none');
    } else {
        alert('Invalid username or password');
    }
});

// Log out
logoutBtn.addEventListener('click', () => {
    dashboardPage.classList.add('none');
    loginPage.classList.remove('none');
});
