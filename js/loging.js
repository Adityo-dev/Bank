document.getElementById('submit-button').addEventListener("click", function(){
    
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    emailField.value = '';
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    passwordField.value = '';
    
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html'
    }
    else{
        alert('Please enter correct information!!')
    }
})