function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      const imageData = {
        width: image.width,
        height: image.height,
        url: url,
      };

      resolve(imageData);
    };

    image.onerror = () => {
      reject(new Error("Ошибка загрузки изображения"));
    };

    image.src = url;
  });
}

const imageUrl = "./cat.jpg";

loadImage(imageUrl)
  .then((imageData) => {
    console.log("Изображение успешно загружено:", imageData);
  })
  .catch((error) => {
    console.error("Ошибка загрузки изображения:", error);
  });
