const email = document.querySelector('.section-container__form-container-input');
const btn = document.querySelector('.section-container__form-container-button');

btn.addEventListener('click' , (e) =>{
    e.preventDefault();
    validateEmail(email.value);
});

const validateEmail = (ema) =>{
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(expReg.test(ema) == true){
        email.style.border = '1px solid hsl(223, 87%, 63%)';
        error.style.visibility = 'hidden';
    }else{
        email.style.border = '1px solid red';
        error.style.visibility = 'visible';
        if(screen.width < 900){
            btn.style.marginTop = '30px';
        }
        
    }
}