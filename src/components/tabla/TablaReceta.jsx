import React from 'react'
import { useFecthReceta } from '../../hooks/useFecthReceta'

export const TablaReceta = () => {
    
    const  {receta} = useFecthReceta();
    
    console.log(receta.ingredients);
    return (
        <div>
        <table className="table table-striped">
            <thead>
                <td>Items</td>
                <td>Ingrediente</td>
                <td>Precio</td>
            </thead>
            <tbody>
              
            </tbody>
        </table>  
    </div>
    )
}
