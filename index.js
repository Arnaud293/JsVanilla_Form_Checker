const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');

const progressBar = document.getElementById('progress-bar');

let pseudo, email, password, confirmPass;

const errorDisplay = (tag, message, valid) => {
    const container = document.querySelector("." + tag + '-container');
    const span = document.querySelector("." + tag + '-container > span');

    if(!valid){
        container.classList.add('error');
        span.textContent = message;
    } else {
        container.classList.remove('error');
        span.textContent = '';
    }
}

const pseudoChecker= (value) => {
   if(value.length > 0 && (value.length< 3 || value.length >20)){
        errorDisplay("pseudo", "Le pseudo doit contenir entre 3 et 20 caractères");
        pseudo = null;
   }
   else if(!value.match(/^[a-zA-A0-9_.-]*$/)){
    errorDisplay('pseudo', 'Le pseudo ne doit pas contenir de caractères spéciaux');
    pseudo = null;
   }
   else{
    errorDisplay('pseudo', '', true);
    pseudo = value;
   }
}

const emailChecker= (value) => {
    if(!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)){
        errorDisplay('email', 'Adresse mail invalide');
        email = null;
    }
    else {
        errorDisplay('email', '', true);
        email = value;
    }
}

const passwordChecker= (value) => {

    progressBar.classList = "";

    if(!value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)){
        errorDisplay('password', "Doit contenir 8 caractères, une majuscule, un chiffre et un caractère spécial")
        password = null;
        progressBar.classList.add('progressRed')
    } else if( value.length<12){
        progressBar.classList.add('progressBlue');
        errorDisplay('password', '', true);
        password = value;
    } else {
        progressBar.classList.add('progressGreen');
        errorDisplay('password', '', true);
        password = value;
    }
    if(confirmPass) confirmChecker(confirmPass);
}

const confirmChecker= (value) => {
    if(value !== password){
        errorDisplay('confirm', 'Les mots de passe ne correspondent pas');
        confirmPass = false;
    } else {
        errorDisplay('confirm', '', true);
        confirmPass = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        switch(e.target.id){
            case "pseudo":
                pseudoChecker(e.target.value);
                break;
            case "email":
                emailChecker(e.target.value);
                break;
            case "password":
                passwordChecker(e.target.value);
                break;
            case "confirm":
                confirmChecker(e.target.value);
                break;
            default :
            return null;    
        }
    })
})