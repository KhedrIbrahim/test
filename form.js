let inpName = document.getElementById("inpName")
let inpEmail = document.getElementById("inpEmail")
let inpMsg = document.getElementById("inpMsg")

let errorEleName = document.getElementById("errorEleName")
let errorEleEmail = document.getElementById("errorEleEmail")
let errorEleMsg = document.getElementById("errorEleMsg")

let btnSubmit = document.getElementById("btnSubmit")

let errName = true;
let errEmail = true;
let errMsg = true;


function checkNameError() {
    if (inpName.value.length <= 2) {
        inpName.classList.add("st-err")
        errorEleName.style.cssText = "display: block";
        setTimeout(() => {
            errorEleName.classList.add("act");
        }, 100);
        errName = true;
    } else {
        inpName.classList.remove("st-err")
        errorEleName.classList.remove("act");
        setTimeout(() => {
            errorEleName.style.cssText = "display: none";
        }, 100);
        errName = false;
    }
}

function checkEmailError() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(inpEmail.value)) {
        inpEmail.classList.add("st-err")
        errorEleEmail.style.cssText = "display: block";
        setTimeout(() => {
            errorEleEmail.classList.add("act");
        }, 100);
        errEmail = true;
    } else {
        inpEmail.classList.remove("st-err")
        errorEleEmail.classList.remove("act");
        setTimeout(() => {
            errorEleEmail.style.cssText = "display: none";
        }, 100);
        errEmail = false;
    }
}

function checkMsgError() {
    if (inpMsg.value.length < 10) {
        inpMsg.classList.add("st-err")
        errorEleMsg.style.cssText = "display: block";
        setTimeout(() => {
            errorEleMsg.classList.add("act");
        }, 100);
        errMsg = true;
    } else {
        inpMsg.classList.remove("st-err")
        errorEleMsg.classList.remove("act");
        setTimeout(() => {
            errorEleMsg.style.cssText = "display: none";
        }, 100);
        errMsg = false;
    }
}

inpName.addEventListener('input', checkNameError);
inpEmail.addEventListener('input', checkEmailError);
inpMsg.addEventListener('input', checkMsgError);


btnSubmit.addEventListener("click", function(e){
    e.preventDefault();
    checkNameError();
    checkEmailError();
    checkMsgError();
    if (!errName && !errEmail && !errMsg) {
        // Valid
        submitForm()
    } else {
        console.log("Input errors");
    }
})

function submitForm(){
    let name = inpName.value;
    let email = inpEmail.value;
    let msg = inpMsg.value;

    $.ajax({
        type: 'POST',
        url: 'mailme.php',
        data: {
            name: name,
            email: email,
            msg: msg
        },
        success: function (response) {
            console.log("Email sent to you successfully.");
        },
        error: function (xhr, status, error) {
            console.error(`Error sending email to you: ${error}`);
        }
    });

    $.ajax({
        type: 'POST',
        url: 'mailtnx.php',
        data: {
            name: name,
            email: email
        },
        success: function (response) {
            console.log("Thank you email sent successfully.");
        },
        error: function (xhr, status, error) {
            console.error(`Error sending thank you email: ${error}`);
        }
    });
}