import React from 'react'
import { CardPoke } from './CardPoke'

export const Cards = (results) => {
  return (
    <div className='container'>
        <ul className='cards'>
            {
                results.map( p=>(
                    <li className='card-item' key={p.name}>
                        <CardPoke url={p.url}/>
                    </li>
                )
                )
            }
        </ul>
    </div>
  )
}
