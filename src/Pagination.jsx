import React from 'react'

export default function Pagination({pagAnterior, proxPagina}) {
  return (
    <div>
        { pagAnterior && <button onClick={pagAnterior}> Back </button> }
        { proxPagina && <button onClick={proxPagina}> Next </button> }
    </div>
  )
}
