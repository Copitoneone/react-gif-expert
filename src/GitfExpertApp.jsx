import { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GitfExpertApp = () => {

  const value = [ 'One Punch','Naruto' ];

  const [categories, setcategories] = useState( value )

  const onAddCategory = ( newCategory ) => {
    // console.log(newCategory);
    // categories.push( newCategory );
    if( categories.includes(newCategory) ) return;

    setcategories( [ newCategory, ...categories]);
    
    // setcategories( cat => [ ...value, 'Naruto']);
  };

  return (

    <>

      <h1>GitfExpertApp</h1>
      {/* Input */}
      <AddCategory
      
      //  setcategories={ setcategories }
      onNewCategory={ event => onAddCategory(event) }

      />
      
      {/* boton */}

      { categories.map( categories => (
            <GifGrid 
              key={ categories }
              categories={ categories } />
         ))
      }
    
    </>
   
  )
}
