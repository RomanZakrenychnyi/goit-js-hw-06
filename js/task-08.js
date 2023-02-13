const formEl = document.querySelector('form');


formEl.addEventListener('submit', event => {
    event.preventDefault();

    if(event.target.email.value === '' || event.target.password.value === '') {
        alert('Усі поля мають бути заповненні!')
    }

    const elements = {
        email: event.target.email.value,
        password: event.target.password.value
    }

    console.log(elements);

    event.target.reset();
})