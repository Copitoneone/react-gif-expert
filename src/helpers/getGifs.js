export const getGifs = async( categories ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=aY3iegicHUnW7EeCKHu5SShBGynwHxvu&q=${ categories }&limit=20`;
  
    const resp = await fetch( url );
  
    const { data } = await resp.json();
  
    const gifs = data.map( img => ({
  
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
  
    }));
  
    return gifs;
  }