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

      //   localStorage.setItem("vkPosts", JSON.stringify(posts));
    })
    .catch((error) => {
      console.error("Ошибка при загрузке постов:", error);
    });

  // Вывод постов в виджете
  // widget.innerHTML = '';
  // posts.forEach(post => {
  //   const postElement = document.createElement('div');
  //   postElement.textContent = post.text;
  //   widget.appendChild(postElement);
  // });
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
          console.log(post);
          postDiv.textContent = post.text;
          widget.appendChild(postDiv);
        }
        post.attachments?.forEach((attachments) => {
          img += `<img class='img' src="${attachments.photo.sizes[0].url}">`;
        });
        postImg.innerHTML = img;
        postDiv.appendChild(postImg);
      });

      //   localStorage.setItem("vkPosts", JSON.stringify(posts));
    })
    .catch((error) => {
      console.error("Ошибка при загрузке постов:", error);
    });

  // Обработка полученных данных
  // const newPosts = response.items;
  // posts = posts.concat(newPosts);

  // Вывод дополнительных постов в виджете
  // posts.forEach((post) => {
  //   const postElement = document.createElement("div");
  //   postElement.textContent = post.text;
  //   widget.appendChild(postElement);
  // });
}

function savePostsToCache() {
  // Сохранение постов в localStorage
  localStorage.setItem("posts", JSON.stringify(posts));
}

function loadPostsFromCache() {
  // Загрузка постов из localStorage
  const cachedPosts = localStorage.getItem("posts");
  if (cachedPosts) {
    posts = JSON.parse(cachedPosts);
    loadPosts();
  }
}

function evictOldPosts() {
  // Вытеснение старых постов при переполнении localStorage
  const MAX_CACHE_SIZE = 20;
  if (localStorage.length >= MAX_CACHE_SIZE) {
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

loadPosts();
