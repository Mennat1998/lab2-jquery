import { movieID, url, imgPath, movieDetailsData } from "./Vars.js";

function getMovie(id) {
  let movieUrl = `${url}/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`;
  fetch(movieUrl)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const { title, poster_path, overview } = data; 
      const movieElement =$("div");
      movieElement.addClass("container");
      movieElement.html(`
                    <img src="${imgPath + poster_path}" alt="Move" />
                        <div>
                        <h3 id="moveName">${title}</h3>
                    <p>${overview}</p>
                    </div>
                    `)
      movieDetailsData.append(movieElement);
    });
}
getMovie(movieID);

