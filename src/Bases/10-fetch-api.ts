const API_KEY = 'QrTcO5MyIQA5UI4HPkc97DBJKW2CS3KE';
const myRequest = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`);

myRequest.then((response)=> response.json())
.then((data)=> {
    const imageUrl = data.data.images.original.url;
    console.log(imageUrl);

    const imgElement= document.createElement('img')
    imgElement.src =imageUrl;

    document.body.append(imgElement);
})
.catch((error)=>{
    console.error(error)
})