


const getImageClick =async()=>{
    console.log("Esta llamando a la imagen");
    const newUrl=  await getImage();
    document.getElementById('gif').src=newUrl;
}

const getImage = async() =>{
    try{
        const data = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const  respJson = await data.json();
        const { url } = respJson.data.images.original;
        return url;
        
    }catch(e){
        console.error(e);
    }
}