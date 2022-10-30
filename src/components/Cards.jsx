import React from 'react'
import { CardPoke } from './CardPoke'

export const Cards = (results) => {
  return (
    <div className='container'>
        <ul>
            {
                results.map( p=>(
                    <li>
                        <CardPoke url={p.url}/>
                    </li>
                )
                )
            }
        </ul>
    </div>
  )
}
