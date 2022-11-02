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
        <button className="button" onClick={obtenerPersonajes}>Personajes</button>
        <button className="button" onClick={siguiente}>Siguiente</button>
        <button className="button" onClick={anterior}>Anterior</button>
        {
            personajes.map((resultado)=>(
              <div className="row">
                <div className="column">
                <div className="card">
                <img src={resultado.imageUrl} alt={resultado.name} />
                <div className="container"><h4><p>{resultado._id}-{"Nombre: "}{resultado.name}</p><p>{"Films: "}{resultado.films}</p><p>{"Serie: "}{resultado.tvShows}</p></h4></div>
                </div>
              </div>
              </div>                
            ))
        }
    </div>
  )
}