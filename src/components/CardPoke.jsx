import React from 'react'
import { UseFetch } from './UseFetch'

export const CardPoke = () => {
    const estatus=UseFetch(url)
    const {cargando,data}=estatus

  return (
    <div>
    {
        cargando
        ?
        <h1>Cargando</h1>
        :
        <div className='card' style={{width:'14px'}}>
            <div className='card-header'>
                <h5 className='card-title'></h5>
                <div className='card-body'>
                    <img src="" alt="pokemon" />
                </div>
                <div className='card-footer'>
                    <div className='card-text'></div>
                </div>
            </div>

        </div>
    }   

    </div>
  )
}
