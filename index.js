
const key = 'qXA4kusyCMAcAkmUDWWLaBCCSJf7e044';
const giphSection = document.getElementById('giph-section');
const giphClasses = document.querySelectorAll('.giph-display');
const form = document.getElementById('form');
const button = document.getElementById('button');
const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=`;


const getGiph = async () => {
    const inputValue = document.getElementById('search-giph').value;
    console.log(inputValue);
    const amount = document.getElementById('amount').value;
    const urlToFetch = `${url}${inputValue}&limit=${amount}`
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            // const giphies = jsonResponse.data[0].images.original.url;
            // const giphies = jsonResponse.data.map(item => item.images.original.url);
            const giphies = jsonResponse.data;
            console.log(giphies);
            return giphies;
        }
    } catch (error) {
        console.log(error);
    }
}

const createHTML = (src, title) => {
    return ` <div class="giph-div">
    <img src="${src}" width="300" height="300" />
    <h5>${title}</h5>
    </div`
}

/* const renderGiph = (src) => {
    giphClasses.forEach((giphDivClass, index) => {
        const singleSrc = src[index];
        const giphDiv = document.createElement('div');
        giphDiv.innerHTML = createHTML(singleSrc);
        giphDivClass.append(giphDiv);
    })
}*/

const renderGiph = (giphies) => {
  giphies.forEach((giph) => {
    const src = giph.images.original.url;
    const title = giph.title;
      giphSection.insertAdjacentHTML("beforeend", createHTML(src, title));
  });
}


const executeSearch = async (event) => {
    event.preventDefault();
   // giphClasses.forEach(giph => giph.innerHTML = '');
    // getGiph().then(src => renderGiph(src));
    giphSection.innerHTML = '';
    const getGiphy = await getGiph();
    renderGiph(getGiphy);
}

form.addEventListener('submit', executeSearch);