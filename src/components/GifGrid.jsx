import { GitItem } from './GitItem';
import { useFetchGifts } from '../hooks/useFetchGifts';


export const GifGrid = ({ categories }) => {

  const { images, isLoading } = useFetchGifts( categories);
  
  return (
    
    <>
        <h3>{ categories }</h3>
        {
          isLoading && ( <h2>Cargando...</h2>)

        }

        <div className='card-grid'>
        { 
          images.map( ( image ) => (
            <GitItem 
              key={ image.id }
              { ...image }
              />
        ))
        }
         
        </div>
    </>

  )
}
