import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'QrTcO5MyIQA5UI4HPkc97DBJKW2CS3KE';

const createImageInsideDOM = (url:string) => {
    const imgElement= document.createElement('img')
    imgElement.src =url;

    document.body.append(imgElement);
}

const getRandomGifUrl = async() =>{
   
    const response = await fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`);
    const {data} = await response.json();
    return data.images.original.url;
};

getRandomGifUrl().then(createImageInsideDOM)

