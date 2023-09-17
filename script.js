const slide0 = document.querySelector(
  "body > div > div > div.content > div.buttons > label:nth-child(1)"
);
const slide1 = document.querySelector(
  "body > div > div > div.content > div.buttons > label:nth-child(2)"
);
const slide2 = document.querySelector(
  "body > div > div > div.content > div.buttons > label:nth-child(3)"
);
const slide3 = document.querySelector(
  "body > div > div > div.content > div.buttons > label:nth-child(4)"
);
const image0 = document.querySelector(
  "body > div > div > div.gif > img:nth-child(1)"
);
const image1 = document.querySelector(
  "body > div > div > div.gif > img:nth-child(2)"
);
const image2 = document.querySelector(
  "body > div > div > div.gif > img:nth-child(3)"
);
const image3 = document.querySelector(
  "body > div > div > div.gif > img:nth-child(4)"
);
const text = document.querySelector(
  "body > div > div > div.content > div.text > p"
);
slide0.addEventListener("click", () => {
  // Добавляем классы для анимации
  image0.classList.add("hidden");
  transform0();
});
slide1.addEventListener("click", () => {
  // Добавляем классы для анимации
  image0.classList.add("hidden");
  transform1();
});

slide2.addEventListener("click", () => {
  // Добавляем классы для анимации
  image0.classList.add("hidden");
  transform2();
});
slide3.addEventListener("click", () => {
  // Добавляем классы для анимации
  image0.classList.add("hidden");
  transform3();
});

//  Functions

function transform0() {
  setTimeout(() => {
    image1.style.display = "none"; // Скрываем image0 после окончания анимации
    image2.style.display = "none"; // Скрываем image0 после окончания анимации
    image3.style.display = "none"; // Скрываем image0 после окончания анимации
  }, 80); // 300 миллисекунд - это время анимации
  image0.style.display = "block"; // Устанавливаем opacity обратно на 1
  image0.style.transform = "translateX(0px)"; // Устанавливаем opacity обратно на 1
  image0.style.opacity = "1"; // Устанавливаем opacity обратно на 1
  text.textContent = "Hurray!";
}

function transform1() {
  setTimeout(() => {
    image0.style.display = "none"; // Скрываем image0 после окончания анимации
    image2.style.display = "none"; // Скрываем image0 после окончания анимации
    image3.style.display = "none"; // Скрываем image0 после окончания анимации
  }, 80); // 300 миллисекунд - это время анимации
  image1.style.display = "block"; // Устанавливаем opacity обратно на 1
  image1.style.transform = "translateX(0px)"; // Устанавливаем opacity обратно на 1
  image1.style.opacity = "1"; // Устанавливаем opacity обратно на 1
  text.textContent = "I want to eat!";
}
function transform2() {
  setTimeout(() => {
    image0.style.display = "none"; // Скрываем image0 после окончания анимации
    image1.style.display = "none"; // Скрываем image0 после окончания анимации
    image3.style.display = "none"; // Скрываем image0 после окончания анимации
  }, 80); // 300 миллисекунд - это время анимации
  image2.style.display = "block"; // Устанавливаем opacity обратно на 1
  image2.style.transform = "translateX(0px)"; // Устанавливаем opacity обратно на 1
  image2.style.opacity = "1"; // Устанавливаем opacity обратно на 1
  text.textContent = "I dance dance";
}
function transform3() {
  setTimeout(() => {
    image1.style.display = "none"; // Скрываем image0 после окончания анимации
    image2.style.display = "none"; // Скрываем image0 после окончания анимации
    image0.style.display = "none"; // Скрываем image0 после окончания анимации
  }, 80); // 300 миллисекунд - это время анимации
  image3.style.display = "block"; // Устанавливаем opacity обратно на 1
  image3.style.transform = "translateX(0px)"; // Устанавливаем opacity обратно на 1
  image3.style.opacity = "1"; // Устанавливаем opacity обратно на 1
  text.textContent = "Meow meow";
}
