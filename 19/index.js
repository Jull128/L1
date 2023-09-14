// function getPosts() {
//   fetch(
//     "https://api.vk.com/method/wall.get?owner_id=-60397113&count=100&access_token=829dd970829dd970829dd970318188793c8829d829dd970e79f4a3ac6c668d9fff6cab6&v=5.131",
//     {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//       },
//     }
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       // Обработка полученных данных
//       return data.response.item;
//     })
//     .catch((error) => {
//       // Обработка ошибок
//       console.error(error);
//     });
// }

function loadPosts() {
  // ID паблика
  const ownerId = -60397113;
  // Количество постов
  const count = 20;
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
      const posts = data.response.items;
      const postList = document.getElementById("post-list");

      posts.forEach((post) => {
        const postDiv = document.createElement("div");
        postDiv.className = "card";
        if (post.text) {
          postDiv.textContent = post.text;
          postList.appendChild(postDiv);
        }
      });
    })
    .catch((error) => {
      console.error("Ошибка при загрузке постов:", error);
    });
}

// Загрузка первой порции постов при открытии страницы
loadPosts();

// Подгрузка новых постов при прокрутке до конца
document
  .getElementById("widget-container")
  .addEventListener("scroll", function () {
    if (this.scrollTop + this.clientHeight >= this.scrollHeight) {
      loadPosts();
    }
  });
