import React, { useState } from 'react'



export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')


    const onInputChange=(event)=>{

         setInputValue(event.target.value)
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length<=1)return;
        //setCategorias(categorias=>[inputValue,... categorias])
        onNewCategory(inputValue.trim());
        setInputValue('');
    }


  return (

    <form action=""  onSubmit={onSubmit}>
    <input type="text"
    placeholder='Buscar gifs'
    value={inputValue}
    onChange={onInputChange} />
    </form>
  )

}
