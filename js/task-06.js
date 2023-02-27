const textAreaInput = document.querySelector('#validation-input');

textAreaInput.addEventListener('blur', ({target}) => {
  const checkNumber = target.dataset.length;
  console.log(target.value.length)
  
  if (target.value.length == checkNumber) {
    target.classList.add('valid');
    target.classList.remove('invalid');
  } else {
    target.classList.add('invalid');
    target.classList.remove('valid');
    }
})