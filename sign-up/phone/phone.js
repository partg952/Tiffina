document.getElementById('proceed').onclick=()=>{
    checkcode();
}
let res = ''

window.onload=()=>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
        size: "normal",
        callback: function(response) {
            submitPhoneNumberAuth();
            console.log(response)
        }
        }
    );
    recaptchaVerifier.render()
}



function submitPhoneNumberAuth() {
    // We are using the test phone numbers we created before
    // var phoneNumber = document.getElementById("phoneNumber").value;
    var phoneNumber = "+91"+document.getElementById('number').value;
    var appVerifier = window.recaptchaVerifier;
    firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function(confirmationResult) {
        window.confirmationResult = confirmationResult;
        console.log(confirmationResult)
        res = confirmationResult
    })
    .catch(function(error) {
        console.log(error);
    });
}

function submitPhoneNumberAuthCode() {
    // We are using the test code we created before
    var code = document.getElementById("code").value;
    
    res
    .confirm(code)
    .then(function(result) {
        var user = result.user;
        console.log(user);
        alert('user logged in ')
    })
    .catch(function(error) {
        console.log(error);
        alert('login failed')
    });
}
