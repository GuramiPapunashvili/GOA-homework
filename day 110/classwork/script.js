// const form = document.querySelector('form');
// const main = document.querySelector('main');
// const apiKey = `d4cb1d42`

// const renderInfo = (user) => {
//   main.innerHTML = `
//     <img src='${user.avatar_url}' width='300px'/>
//     <h1>${user.name ? user.name : "Luka"}</h1>
//     <p>Username: ${user.login}</p>
//     <p>Bio: ${user.bio}</p>
//     <p>Public Reps: ${user.public_repos}</p>
//     <a href='${user.html_url}'>See More</a>
//   `
// }

// const fetchInfo = async (movieName) => {
//   try {
//     const response = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`);;
//     const user = await response.json();
//     console.log(user)
//     // renderInfo(user);
//   } catch(error) {
//     console.log(`My code error: ${error}`)
//   }
// }

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   fetchInfo(form.movieName.value);
// })

const form = document.querySelector("form");
const main = document.querySelector("main");

const apiKey = `d4cb1d42`

const renderInfo = (movieName) => {
    main.innerHTML = `
        <img src='${movieName.Poster}' width='300px'/>
        <h1>${movieName.title}</h1>
        <p>Awards: ${movieName.Awards}</p>
        <p>Origin of country: ${movieName.Country}</p>
    `;
}
const fetchInfo = async (movieName) => {
    try {
        const promise = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`);
        const movie = await promise.json();
        renderInfo(movie);
    } catch(error) {
        console.log(`Error: ${error}`);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchInfo(form.movieName.value);
})