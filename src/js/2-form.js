const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

function populateForm() {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  
  if (!savedData) return; // Если в хранилище пусто, просто выходим

  try {
    const parsedData = JSON.parse(savedData);
    
    // Проверяем, что parsedData — это объект, а не null
    if (parsedData && typeof parsedData === 'object') {
      formData.email = parsedData.email || '';
      formData.message = parsedData.message || '';

      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    }
  } catch (error) {
    console.warn("Ошибка чтения хранилища, очищаем его:", error);
    localStorage.removeItem(LOCAL_STORAGE_KEY); // Если JSON битый, лучше удалить его совсем
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
