import {useState, useEffect} from 'react'
import { GetReceta } from '../helpers/GetReceta'

 
export const useFecthReceta = () => {
    const [state, setstate] = useState({
        receta: []
    })
        
    useEffect(()=>{
        GetReceta ()
            .then(res => {
                setstate({
                    receta:  res
                })
            })
    }, [])


    return state;
}
