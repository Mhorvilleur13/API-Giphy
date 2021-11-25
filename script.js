const key = 'qXA4kusyCMAcAkmUDWWLaBCCSJf7e044';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;
const button = document.getElementById('button');
const giphSection = document.getElementById('giph-display');

const getGiph = async () => {
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

const executeSearch = async () => {
    giphSection.innerHTML = '';
    // getGiph().then(src => renderGiph(src));
    const getGiphy = await getGiph();
    renderGiph(getGiphy);

}

button.addEventListener('click', executeSearch);

