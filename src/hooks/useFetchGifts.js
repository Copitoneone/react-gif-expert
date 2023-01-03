import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifts = ( categories) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading ] = useState( true );

    const getImages = async() => {
    const newImages = await getGifs( categories );
    setImages( newImages );
    setIsLoading( false );
    }

  useEffect( () => { 
    getImages();
  }, []);

  return {
    images,
    isLoading
  }
}
