
// Функція для генерування випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Знаходимо необхідні елементи
const body = document.querySelector('body');
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Додаємо обробник події на кнопку
changeColorButton.addEventListener('click', () => {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // Змінюємо колір фону <body>
  body.style.backgroundColor = randomColor;

  // Відображаємо значення кольору в <span class="color">
  colorSpan.textContent = randomColor;
});
