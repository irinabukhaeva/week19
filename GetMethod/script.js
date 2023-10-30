const articlesWrap = document.getElementsByTagName("main")[0];

// создаем функцию, которая получает на вход объект поста и возвращает строку HTML-разметки;

function createArticle(title, body) {
  const artWrap = document.createElement("article");
  const artTitle = document.createElement("h2");
  artTitle.innerText = `Заголовок: ${title}`;
  const artBody = document.createElement("p");
  artBody.innerText = `Статья: ${body}`;
  artWrap.append(artTitle);
  artWrap.append(artBody);
  return artWrap;
}

//создаем функицю, которая добавляет полученную разметку в полученный контейнер;

function printArticle(article) {
  articlesWrap.appendChild(article);
}

// делаем GET-запрос и добавляем данные на страницу

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((article) => {
      console.log(article);
      printArticle(createArticle(article.title, article.body));
    });
  });
