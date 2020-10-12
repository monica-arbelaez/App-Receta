import React from 'react'
import { useFecthReceta } from '../../hooks/useFecthReceta'
import { Link } from 'react-router-dom';
import { Header } from '../header/Header';
import { TablaReceta } from '../tabla/TablaReceta';
export const Receta = () => {
    const {receta} = useFecthReceta()
    const {name, ingredients} = receta; 
    return (
        <div className="cardm container-fluid  col-8 ">
        <div className="card ">
            <Header
                titulo = {name}
                clase = 'text-danger'

            ></Header>
          <div>
            <TablaReceta
             
            />
            <div className="calculate">
              <p>Items:</p>
              <p>Subtotal</p>
              <p>Gastos de envio</p>
              <div className="total row ">
              <p>Total</p> </div>
              <div className="total2 text-right">
               <p>9,95 €</p>
              </div>
              </div>
              
           
            <div className="fluid d-flex justify-content-center">
              <Link to="/" className="btn">
                Comparar ingredientes:
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}
