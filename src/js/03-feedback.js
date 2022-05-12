import throttle from 'lodash.throttle';

const formData = {};

const allForm = document.querySelector('.feedback-form');
const inputForm = document.querySelector('input');
const textareaForm = document.querySelector('textarea');

allForm.addEventListener('submit', onSubmit);

allForm.addEventListener('input', throttle(onForm, 500));

function onForm(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
}

function loageTextarea() {
  const localStorageValue = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (localStorageValue) {
    textareaForm.value = localStorageValue.message;
    inputForm.value = localStorageValue.email;
  }
}

document.addEventListener('DOMContentLoaded', loageTextarea);
