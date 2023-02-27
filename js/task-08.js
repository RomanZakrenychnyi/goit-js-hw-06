const formEl = document.querySelector('form');


formEl.addEventListener('submit', event => {
    event.preventDefault();

    const inputValue = event.target;

    if (inputValue.email.value === '' || inputValue.password.value === '') {
        alert('Усі поля мають бути заповненні!')
        return;
    }

    const elements = {
        email: inputValue.email.value,
        password: inputValue.password.value
    }

    console.log(elements);

    inputValue.reset();
})