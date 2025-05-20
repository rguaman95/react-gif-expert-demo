
export const getGifs = async (  category ) =>{

    console.log(category)

    const Url = `https:api.giphy.com/v1/gifs/search?api_key=X9lF1eNagPNhcHPowis0nRjQyST0FZTK&q=${category}&limit=10`;
    const resp  = await fetch(Url);
    const {data} =  await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title:img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}

//N7xcmVDio2x1buk1yPbh9MsDkOqgeg94