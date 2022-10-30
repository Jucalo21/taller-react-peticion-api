import React, {useEffect, useState}from 'react'

export const PeticionApiPrueba = () => {
    const[personaje, setPersonaje]=useState(null);
    const[paginacion, setPaginacion]=useState(0);
    
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);

            const personajeData={
                name: data.results[paginacion].name,
                type: data.results[paginacion].id
            }

            setPersonaje(personajeData);
        });
    }, []);
    const siguiente = async()=>{
        setPaginacion(paginacion + 1)
        PeticionApiPrueba()
      }
    
      const anterior = async()=>{
        setPaginacion(paginacion - 1)
        PeticionApiPrueba()
      }
    return (
      //
        <div>
            <h1 className="titulo">Pokemon</h1>
        {personaje ? (
        <div className="tarjeta"> <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${paginacion+1}.svg`}
                className="imagen"
                alt="profile-image"
              />
            <div className="nombre">
             <h4>{paginacion+1}-{personaje.name}</h4>
            </div>
        <button className="Button" onClick={siguiente}>Siguiente</button>
        <button className="Button" onClick={anterior}>Anterior</button>
     </div>) : null}
     </div>
   //   ))
  )

}



