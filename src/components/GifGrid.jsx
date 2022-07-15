import React, { useEffect, useState } from 'react'
import { useFecthGifs } from '../hooks/useFecthGifs';
import { GifItem } from './GifItem';
//import { getGifs } from '../helpers/getGifs';


export const GifGrid = ({category}) => {
  
  const {images, isLoading} =useFecthGifs (category);


// const [images, setImages] = useState([]);
  
//   useEffect(()=>{
//     getGifs(category)
//     .then(newImages =>setImages(newImages));

//   }, [])
//   //si se deja las dependencias vacias es que este hooksolose va a disparar
  //la primera vez que se crea el componente



  
  
    return (
    <>
    <h3>{category}</h3>
     {
    
    isLoading && (<h2>Cargando...</h2>)
    // isLoading ?
      // ( <h2>Cargando</h2>)
      // :null
     }
     

        <div className='card-grid'>
          {
            images.map((image)=>(
              <GifItem
               key={image.id}
              //se utiliza el operador spred para espacir las imagenes y asi recive cada uo de las cosas comopropertys
              //se utiliza cuando se tiene muchas propiedades
              //  {...image}
                title={image.title}
               url={image.url}
               />
            ))
          }
        </div>
  
    </>
  )
}
