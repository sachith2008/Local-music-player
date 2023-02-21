function checkLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'sachith' && password === '2008') {
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').innerHTML = 'Invalid username or password.';
    }
}
