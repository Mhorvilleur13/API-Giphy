const key = 'qXA4kusyCMAcAkmUDWWLaBCCSJf7e044';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;
const form = document.getElementById('form');
const giphSection = document.getElementById('giph-display1');
// git test
const getRandomGiph = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            const giph = jsonResponse.data.images.original.url;
            console.log(giph);
            return giph;
        }
    } catch (error) {
        console.log(error);
    }
}

const createHTML = (src) => {
    return `<img src="${src}" width="500" height="500" />`;

}

const renderGiph = (src) => {
    const giphDiv = document.createElement('div');
    giphDiv.innerHTML = createHTML(src);
    giphSection.append(giphDiv);
}

const executeSearch = async (event) => {
    event.preventDefault();
    giphSection.innerHTML = '';
    // getGiph().then(src => renderGiph(src));
    const getGiphy = await getRandomGiph();
    renderGiph(getGiphy);

}

form.addEventListener('submit', executeSearch);

