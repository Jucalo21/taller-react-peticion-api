import React from 'react'


export const PeticionApi = () => {
  const [personajes, setPersonajes]= React.useState([])
  const [paginacion, setPaginacion]= React.useState(1)


  const obtenerPersonajes = async()=>{
    try {
        const res= await fetch(`https://api.disneyapi.dev/characters?page=${paginacion}`)
        const {data}=await res.json()
        setPersonajes(data)
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
        <h1 className="titulo">Disney</h1>
        <button className="boton" onClick={obtenerPersonajes}>Personajes</button>
        <button className="boton" onClick={siguiente}>Siguiente</button>
        <button className="boton" onClick={anterior}>Anterior</button>
        {
            personajes.map((resultado)=>(
              <div className="card">
                <img src={resultado.imageUrl} alt={resultado.name} />
                <div className="container"><h4><b>{resultado._id}-{resultado.name}</b></h4></div>
                
                
              </div>  
            ))
        }
    </div>
  )
}