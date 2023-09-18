async function loadImage(url) {
  const p = new Promise((resolve, reject) => {
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
  let result = await p;
  console.log("Изображение успешно загружено:", result);
}

const imageUrl = "./cat.jpg";

loadImage(imageUrl).catch((error) => {
  console.error("Ошибка загрузки изображения:", error);
});
