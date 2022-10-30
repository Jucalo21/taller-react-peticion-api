import React from 'react'
const pokemonContainer= document.querySelector(".pokemon-container");

export const PeticionApiPoke = () => {

    const obtenerPersonajes=async(id)=>{
    try {
        const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then ((res)=>res.json())
        .then((data)=>{
            crearPokemon(data);
        }); 
    } catch (error) {
        console.log(error)
    }
    }

    function idPokemon(numero){
        for (let i = 1; i <= numero; i++) {
            obtenerPersonajes(i);
            
        }
    }

    const crearPokemon=async(pokemon)=>{
        const card=document.createElement('div');
        card.classList.add('pokemon-block');

        const spriteContainer=document.createElement('div');
        spriteContainer.classList.add('img-container');

        const sprite=document.createElement('img');
        sprite.src=pokemon.sprites.other.dream_world.front_default

        spriteContainer.appendChild(sprite);

        const numero=document.createElement('p');
        numero.textContent=`#${pokemon.id.toString().padStart(3,0)}`;

        const name=document.createElement('p');
        name.classList.add('name');
        name.textContent=pokemon.name

        card.appendChild(spriteContainer);
        card.appendChild(numero);
        card.appendChild(name);

        pokemonContainer.appendChild(card);
    }

    return (
    <div>
        <h1>PeticionApiPoke</h1>
        
    </div>

  )
}

