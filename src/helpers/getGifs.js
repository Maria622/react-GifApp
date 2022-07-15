  //realizar una peticion http  a un apis
  //esta parte noes una buena practica
   export const getGifs = async( category )=>{
    const url= `https://api.giphy.com/v1/gifs/search?api_key=VRIm1LD5vw8wNLNLoE8zi0Rd7v8nZ2LT&q=${category}&limit=10
    `
    const resp = await fetch(url);
    const {data }= await resp.json();

    const gifs = data.map(img=>({
      id: img.id,
      title: img.title, 
      url: img.images.downsized_medium.url

    }))

    return gifs;

  }
