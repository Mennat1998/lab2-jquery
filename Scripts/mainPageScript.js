import { apiUrl, imgPath } from "./Vars.js";
getMovies(apiUrl);
function getMovies(url) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      showMovie(data.results);
    });
}

function showMovie(data) {
  data.forEach((movie) => {
    const { title, poster_path, id } = movie;
    const movieElement = $("<div></div>");
    movieElement.addClass("movie");
    movieElement.html( `
    <a href="./DetailsPage.html?id=${id}">
    <img src="${imgPath + poster_path}" alt="Move" />
        <h4 id="moveName">${title}</h4>
    </a>`)
    $("#main").append(movieElement);
  });
}
