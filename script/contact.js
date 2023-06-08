const form          = document.getElementById('formulaire');
const entity        = document.getElementById('nom');
const email         = document.getElementById('email');
const message       = document.getElementById('message');
const msgError      = document.querySelectorAll('.error');

/* Regex for matching email pattern */ 
const mailformat    = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/* Regex for using letter only */
const stringFormat  = /^[A-Za-z\s]+$/;

/* Regex that allow user to use some special caract ('.', '.', '?', '!') letters & numbers */
const messageFormat = /^[A-Za-z0-9\s.,!'?]+$/;

form.addEventListener('submit', function(e){
    e.preventDefault();
    const nameValue     = entity.value.trim();
    const emailValue    = email.value.trim();
    const messageValue  = message.value.trim(); 

    /* remove error message for new form submit */
    msgError.forEach(error =>{
        error.classList.add('invisible');
    })

    /* Next step validate all the data */
   if (nameValue.length < 5 || nameValue.length > 50 || !nameValue.match(stringFormat)){
        entity.nextElementSibling.classList.remove('invisible');
    } else if (!emailValue.match(mailformat)) {
        email.nextElementSibling.classList.remove('invisible');
    } else if (messageValue.length < 10 || messageValue.length > 300 || !messageValue.match(messageFormat)){
        message.nextElementSibling.classList.remove('invisible');
    } else {
        /* create div container-notifications message toast to be display */
        const ctn = document.querySelector('.container-notifications');
        const notification = document.createElement('div');
        notification.classList.add('toast');
        notification.innerText ="Votre message a bien été envoyé !";
        ctn.appendChild(notification);

        /* set timeout for toast to be remove */
        setTimeout(function(){
            notification.remove();
        }, 2000);    
       
         /* return value of input to empty string */
         entity.value = "";
         email.value = "";
         message.value = "";
    }
})

