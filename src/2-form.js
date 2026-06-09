const form = document.querySelector(".feedback-form");
const LOCAL_STORAGE_KEY = "feedback-form-state";

// Об'єкт для зберігання стану форми
const formData = {
  email: "",
  message: "",
};

// Функція для заповнення полів із локального сховища при завантаженні сторінки
function populateForm() {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

populateForm();

// Делегування події input для збереження в локальне сховище
form.addEventListener("input", (event) => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

// Обробка відправки форми
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();

  // Валідація на порожні поля
  if (emailValue === "" || messageValue === "") {
    alert("Fill please all fields");
    return;
  }

  // Виведення результату в консоль
  console.log({ email: emailValue, message: messageValue });

  // Очищення сховища, об'єкта та форми
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formData.email = "";
  formData.message = "";
  form.reset();
});