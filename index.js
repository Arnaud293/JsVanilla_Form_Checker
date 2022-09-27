const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');

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
   }
   else if(!value.match(/^[a-zA-A0-9_.-]*$/)){
    errorDisplay('pseudo', 'Le pseudo ne doit pas contenir de caractères spéciaux');
   }
   else{
    errorDisplay('pseudo', '', true);
   }
}

const emailChecker= (value) => {
    
}

const passwordChecker= (value) => {
    
}

const confirmChecker= (value) => {
    
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