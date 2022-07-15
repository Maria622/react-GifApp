import { useState } from "react"
import { AddCategory, GifGrid } from "./components"



export const GifExpertApp =()=>{

    const [categorias, setCategorias] = useState(['One Punch' ])


    const onAddCategory =(NewCategory)=>{

        if (categorias.includes(NewCategory))return;
        setCategorias([ NewCategory,... categorias])
       //setCategorias(cat =>[...cat, 'Valorant'] );
    }


    return(
        <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
        <AddCategory 
        //  setCategorias={setCategorias} esto oculta la implementacion d eentender nuestro componente
             onNewCategory={onAddCategory}
        />
        
        
                {categorias.map(category =>
                    (
                    <GifGrid key={category} 
                        category={category}/>


                    )
                )
                }
           
        




        </>

    )
}