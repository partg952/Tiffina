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
    var phoneNumber = document.getElementById('number').value;
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

function checkcode(){

}