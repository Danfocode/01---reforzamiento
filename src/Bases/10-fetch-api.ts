import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'QrTcO5MyIQA5UI4HPkc97DBJKW2CS3KE';
const myRequest = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`);

const createImageInsideDOM = (url:string) => {
    const imgElement= document.createElement('img')
    imgElement.src =url;

    document.body.append(imgElement);
}

myRequest.then((response)=> response.json())
.then(({data}: GiphyRandomResponse)=> {
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl)
})
.catch((error)=>{
    console.error(error)
})