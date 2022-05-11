import throttle from 'lodash.throttle';

const formData = {};

const allForm = document.querySelector('.feedback-form');
const inputForm = document.querySelector('input');
const textareaForm = document.querySelector('textarea');

allForm.addEventListener('submit', onSubmit);
// inputForm.addEventListener('input', throttle(onHandInput, 500));
// textareaForm.addEventListener('input', throttle(onTextarea, 500));

allForm.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

function onSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
}

// function onHandInput(e) {
//   const inputMail = e.target.value;
//   console.log(inputMail);
//     localStorage.setItem('feedback-form-state', inputMail);
// }

// function onTextarea(e) {
//   const textareaFormValue = e.target.value;
//   console.log(textareaFormValue);
//     localStorage.setItem('feedback-form-state', textareaFormValue);
// }

function loageTextarea() {
  const localStorageValue = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (localStorageValue) {
    textareaForm.value = localStorageValue.message;
    inputForm.value = localStorageValue.email;
    //    form.elements.email.value = storageData.email;
    //    form.elements.message.value = storageData.message;
  }
}

document.addEventListener('DOMContentLoaded', loageTextarea);
