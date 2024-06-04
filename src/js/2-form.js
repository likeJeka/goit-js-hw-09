const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', () => {
  const formData = new FormData(form);
  const email = formData.get('email');
  const message = formData.get('message');
  const data = { email, message };
  saveToLS('feedback-form-state', data);
});

// ----------------------------------------------
function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}

function clearLS(key) {
  localStorage.removeItem(key);
}

// ----------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS('feedback-form-state');
  if (data) {
    form.elements.email.value = data.email || '';
    form.elements.message.value = data.message || '';
  }
});

// ----------------------------------------------
form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value
  const message = form.elements.message.value

  if (!email || !message) {
    alert('Заповніть будь ласка обидва поля!');
    return;
  }

  console.log('Form submitted:', { email, message });

  clearLS('feedback-form-state');

  form.reset();
});
