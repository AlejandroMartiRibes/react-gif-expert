
import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, steInputValue ] = useState( '' );

    const onInputChange = ({ target }) => {
        steInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length<=1 ) return;

        //setCategories( categories => [ inputValue, ...categories ] );
        onNewCategory( inputValue.trim() );
        steInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
             <input 
            type="text"
            placeholder="Buscar gifs"
            value= { inputValue }
            onChange={ onInputChange }
            />
        </form>
       
  )
}


