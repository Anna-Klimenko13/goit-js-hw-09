const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

// Безопасное чтение данных из localStorage
let formData = {
  email: '',
  message: '',
};

function populateForm() {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  
  if (!savedData || savedData === 'null') return; // Защита: если пусто, ничего не делаем

  try {
    const parsedData = JSON.parse(savedData);
    
    formData.email = (parsedData.email || '').trim();
    formData.message = (parsedData.message || '').trim();

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  } catch (error) {
    console.error('Error parsing JSON from localStorage:', error);
  }
}

populateForm();

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();

  if (emailValue === '' || messageValue === '') {
    alert('Fill please all fields');
    return;
  }

  console.log({ email: emailValue, message: messageValue });

  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});