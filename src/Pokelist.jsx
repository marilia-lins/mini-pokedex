import React from 'react'

export default function Pokelist({pokemon}) {
  return (
    <div>
        {pokemon.map(poke => (
            <div key={poke}>{poke}</div>
        ))}
    </div>
  )
}
