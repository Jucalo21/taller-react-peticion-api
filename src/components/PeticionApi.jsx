import React from 'react'


export const PeticionApi = () => {
  const [personajes, setPersonajes]= React.useState([])
  const [paginacion, setPaginacion]= React.useState(1)


  const obtenerPersonajes = async()=>{
    try {
        const res= await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${1}&offset=${paginacion}/`)
        const {results}=await res.json()
        setPersonajes(results)
    } catch(error){
        console.log(error)
    }
  }

  const siguiente = async()=>{
    await setPaginacion(paginacion + 1)
    obtenerPersonajes()
  }

  const anterior = async()=>{
    await setPaginacion(paginacion - 1)
    obtenerPersonajes()
  }

    return (
    <div>
        <h1>Peticion al api de Pokemon</h1>
        <button onClick={obtenerPersonajes}>Personajes</button>
        <button onClick={siguiente}>Siguiente</button>
        <button onClick={anterior}>Anterior</button>
        {
            personajes.map((resultado)=>(
              <div>
                <h4>{resultado.id}-{resultado.name}-{resultado.types}</h4>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${paginacion-1}.png`} alt={resultado.name} />
              </div>  
            ))
        }
    </div>
  )
}
