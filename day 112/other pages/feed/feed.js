const main = document.querySelector('main')
const form = document.querySelector('form')

const renderInfo = (posts) => {
    main.innerHTML = ''
    for (let i = 0; i < posts.length; i++){
        main.innerHTML += `
        <div style="border: 2px solid black; margin-top: 10px">
            <h1">title: ${posts[i].title}</h1>
            <p>content: ${posts[i].body}</p>
            <p>tags: ${posts[i].tags}</p>
            <p>likes: ${posts[i].reactions.likes}</p>
            <p>dislikes: ${posts[i].reactions.dislikes}</p>
        </div>
        `;
    }
}

const renderCheckbox = (options) =>{
    for (let i = 0; i < options.length; i++){
        form.innerHTML += `
        <label>${options[i]}</label>
        <input value = ${options[i]} type = "checkbox">
        `
    }
}

const loadOptions = async (options) =>{
    try{
        const res = await fetch('https://dummyjson.com/posts/tag-list');
        const data = await res.json();
        renderCheckbox(data);
    }
    catch(error){
        console.log(`Error: ${error}`)
    }
}

const fetchSearchInfo = async (search) =>{
    try {
        const res = await fetch(`https://dummyjson.com/posts/search?q=${search}`)
        const data = await res.json();
        renderInfo(data.posts);
    }
    catch(error){
        console.log(`Error: ${error}`)
    }
}

const fetchInfo = async () =>{
    try{
        const res = await fetch('https://dummyjson.com/posts?limit=200');
        const data = await res.json();
        renderInfo(data.posts);
    }
    catch(error){
        console.log(`Error: ${error}`);
    }
}


document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    loadOptions();
    fetchInfo();
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    fetchSearchInfo(form.tags.value);
})