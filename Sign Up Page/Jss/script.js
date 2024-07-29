function validateForm() {
    // Get inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    
    // Reset error messages
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('confirmPasswordError').innerHTML = '';

    // Validate name
    if (name === '') {
        document.getElementById('nameError').innerHTML = 'Name is required';
        return false;
    }

    // Validate email
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email === '') {
        document.getElementById('emailError').innerHTML = 'Email is required';
        return false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML = 'Invalid email format';
        return false;
    }

    // Validate password
    if (password === '') {
        document.getElementById('passwordError').innerHTML = 'Password is required';
        return false;
    }

    // Validate confirm password
    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').innerHTML = 'Confirm Password is required';
        return false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerHTML = 'Passwords do not match';
        return false;
    }

    return true;
}
