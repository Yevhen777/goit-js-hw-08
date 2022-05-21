import throttle from 'lodash.throttle';

let formData = {};

const allForm = document.querySelector('.feedback-form');
const inputForm = document.querySelector('input');
const textareaForm = document.querySelector('textarea');

allForm.addEventListener('submit', onSubmit);

allForm.addEventListener('input', throttle(onForm, 500));

function onForm(e) {
  let data;
  if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
    data = JSON.parse(localStorage.getItem('feedback-form-state'));
  } else {
    data = formData;
  }
  data[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.target.reset();
  formData = {};
  localStorage.removeItem('feedback-form-state');
}

function loageTextarea() {
  const localStorageValue = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (localStorageValue) {
    if (localStorageValue.message === undefined) {
      textareaForm.value = '';
    } else {
      textareaForm.value = localStorageValue.message;
    }
    if (localStorageValue.email === undefined) {
      inputForm.value = '';
    } else {
      inputForm.value = localStorageValue.email;
    }
  }
}

document.addEventListener('DOMContentLoaded', loageTextarea);

// Доброго дня
// У вас некоректний метод onForm
// Має бути щось типу:
// function onForm(e) {
//   let data;
//   if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
//     data = JSON.parse(localStorage.getItem('feedback-form-state'));
//   } else {
//     data = formData;
//   }
//   data[e.target.name] = e.target.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(data));
// }
