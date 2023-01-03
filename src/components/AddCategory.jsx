import { useState } from 'react';

// export const AddCategory = ({ setcategories }) => {
export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        // setcategories(( categories ) => [ inputValue, ...categories ]);

        if( inputValue.trim().length <= 1) return;

        // setcategories(( categories ) => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        setInputValue( ' ' );
    }

    


  return (
    // <form onSubmit={ (event) => onSubmit(event) } >
    <form onSubmit={onSubmit } >
        <input
            type="text"
            placeholder="Buscar Gifts"
            value={ inputValue }
            onChange={ onInputChange }
        ></input>
    </form>
  )
}
