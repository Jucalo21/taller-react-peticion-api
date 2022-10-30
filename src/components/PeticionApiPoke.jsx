import React,{useState} from 'react'
import {UseFetch} from './UseFetch'
import { Cards } from './Cards'

export const PeticionApiPoke = () => {
    const [url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon/')
    const estatus=UseFetch(url)
    const {cargando,data}=estatus
    cargando? console.log('cargando'):console.log(data.results)
 
    return (
    <div>
        <h1>PeticionApiPoke</h1>
    <button onClick={PeticionApiPoke}>Personajes</button>
    </div>
  )
}
