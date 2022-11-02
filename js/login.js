const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {

    if (target.value.length > 2) {

        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled', '');    
}

const handleSubmit = (e) => {

    e.preventDefault();
    console.log('logando...');

}

input.addEventListener('input', validateInput); //[evento e função]
form.addEventListener('submit', handleSubmit);  //[evento e função]