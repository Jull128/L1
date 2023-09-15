const widget = document.getElementById("widget");
let posts = [];

function loadPosts() {
  // ID паблика
  const ownerId = -60397113;
  // Количество постов
  const count = 5;
  // Ваш access token VK API
  const accessToken =
    "829dd970829dd970829dd970318188793c8829d829dd970e79f4a3ac6c668d9fff6cab6";

  // Вызов метода "wall.get" VK API для получения списка постов
  fetch(
    `https://api.vk.com/method/wall.get?owner_id=${ownerId}&count=${count}&access_token=${accessToken}&v=5.131`
  )
    .then((response) => response.json())
    .then((data) => {
      // Обработка полученных данных и добавление их в виджет
      posts = data.response.items;
      widget.innerHTML = "";
      console.log(posts);
      posts.forEach((post) => {
        const postDiv = document.createElement("div");
        const postImg = document.createElement("div");
        postImg.className = "cardImg";
        let img = "";
        postDiv.className = "card";
        if (post.text) {
          postDiv.textContent = post.text;
          widget.appendChild(postDiv);
        }
        post.attachments?.forEach((attachments) => {
          img += `<img class='img' src="${attachments.photo.sizes[0].url}">`;
        });
        postImg.innerHTML = img;
        postDiv.appendChild(postImg);
      });
    })
    .catch((error) => {
      console.error("Ошибка при загрузке постов:", error);
    });
}

function loadMorePosts() {
  const ownerId = -60397113;
  // Количество постов
  const count = 5;
  const offset = posts.length;
  // Ваш access token VK API
  const accessToken =
    "829dd970829dd970829dd970318188793c8829d829dd970e79f4a3ac6c668d9fff6cab6";

  // Вызов метода "wall.get" VK API для получения списка постов
  fetch(
    `https://api.vk.com/method/wall.get?owner_id=${ownerId}&count=${count}&offset=${offset}&access_token=${accessToken}&v=5.131`
  )
    .then((response) => response.json())
    .then((data) => {
      // Обработка полученных данных и добавление их в виджет
      const newPosts = data.response.items;
      posts = posts.concat(newPosts);

      newPosts.forEach((post) => {
        const postDiv = document.createElement("div");
        const postImg = document.createElement("div");
        postImg.className = "cardImg";
        let img = "";
        postDiv.className = "card";
        if (post.text) {
          postDiv.textContent = post.text;
          widget.appendChild(postDiv);
        }
        post.attachments?.forEach((attachments) => {
          img += `<img class='img' src="${attachments.photo.sizes[0].url}">`;
        });
        postImg.innerHTML = img;
        postDiv.appendChild(postImg);
        savePostsToCache();
      });
    })
    .catch((error) => {
      console.error("Ошибка при загрузке постов:", error);
    });
}

function savePostsToCache() {
  // Сохранение постов в localStorage
  localStorage.setItem("posts", JSON.stringify(posts));
  logLocalStorageSize();
}

function loadPostsFromCache() {
  // Загрузка постов из localStorage
  const cachedPosts = localStorage.getItem("posts");
  if (cachedPosts) {
    posts = JSON.parse(cachedPosts);
    loadPosts();
  }
}

function calculateLocalStorageSize() {
  let totalSize = 0;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    const value = localStorage.getItem(key);

    totalSize += key.length + value.length;
  }

  return totalSize;
}

function logLocalStorageSize() {
  const maxSize = 5 * 1024 * 1024; // Максимальный размер LocalStorage (5MB)
  const currentSize = new Blob(Object.values(localStorage)).size;
  const percentage = (currentSize / maxSize) * 100;
  console.log(
    `Занятое место в LocalStorage: ${currentSize} байт / ${maxSize} байт (${percentage.toFixed(
      2
    )}%)`
  );
}

function evictOldPosts() {
  // Вытеснение старых постов при переполнении localStorage
  const maxSize = 5 * 1024 * 1024;

  if (localStorage.length >= maxSize) {
    const oldestKey = localStorage.key(0);
    localStorage.removeItem(oldestKey);
  }
}

function handleScroll() {
  if (widget.scrollTop + widget.clientHeight >= widget.scrollHeight) {
    loadMorePosts();
  }
}

widget.addEventListener("scroll", handleScroll);
window.addEventListener("beforeunload", savePostsToCache);
window.addEventListener("load", loadPostsFromCache);
window.addEventListener("storage", evictOldPosts);
logLocalStorageSize();
loadPosts();
