function animateElement(element, targetX, targetY, duration) {
  let startX = element.offsetLeft;
  let startY = element.offsetTop;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;

    const ease = easeOutCubic(progress / duration); // Используем функцию плавности для плавного изменения

    const currentX = startX + (targetX - startX) * ease;
    const currentY = startY + (targetY - startY) * ease;

    element.style.left = currentX + "px";
    element.style.top = currentY + "px";

    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

// Пример использования
const element = document.getElementById("myElement");
animateElement(element, 300, 200, 1000); // Изменение положения элемента на (300, 200) за 1 секунду
