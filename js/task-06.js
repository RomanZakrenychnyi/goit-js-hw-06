const textAreaInput = document.querySelector('#validation-input');

textAreaInput.addEventListener('blur', event => {
  const text = event.target;
  const checkNumber = text.dataset.length;
  console.log(text.value.length)
  
  if (text.value.length == checkNumber) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  } else {
    event.target.classList.add('invalid');
    }
})