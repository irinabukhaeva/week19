const btn = document.getElementById("btn-submit");
const posts = document.getElementById("postsWrap");

//создаем функцию, которая получает название поста
function getTitle() {
  const title = document.getElementById("articleTitle");
  if (title.value == "") {
    throw new Error("Напишите название статьи");
  }
  return title.value;
}

//создаем функцию, которая получает содержание поста
function getText() {
  const postText = document.getElementById("postBody");
  if (postText.value == "") {
    throw new Error("Напишите содержание статьи");
  }
  return postText.value;
}

//создаем функцию, которая очищает поля ввода
function cleanInputs() {
  document.getElementById("articleTitle").value = "";
  document.getElementById("postBody").value = "";
}

//создаем фнукцию, которая создает dom-элементы поста
function createPost(title, text) {
  const article = document.createElement("article");
  article.classList.add("post");
  const h2 = document.createElement("h2");
  h2.classList.add("post__title");
  h2.innerText = title;
  const p = document.createElement("p");
  p.classList.add("post__text");
  p.innerText = text;

  article.appendChild(h2);
  article.appendChild(p);

  posts.appendChild(article);
}

//создаем функцию которая создает POST-запрос и вызывает выше обьявленные функции
function setPost() {
  const title = getTitle();
  const text = getText();

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: text,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => createPost(json.title, json.body));

  cleanInputs();
}

//добавляем слушатель на кнопку
btn.addEventListener("click", setPost);
