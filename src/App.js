import { useEffect, useState } from 'react';
import './App.css';
import Pokelist from './Pokelist';
import axios from 'axios';
import Ash from './ash.gif'
import Pagination from './Pagination';
import Top from './Top';

function App() {

  const [pokemon, setPokemon] = useState([])
  const [pokeInicial, setPokeInicial] = useState("https://pokeapi.co/api/v2/pokemon")
  const [pokeNext, setPokeNext] = useState()
  const [pokeAntes, setPokeAntes] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(pokeInicial, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
    setPokemon(res.data.results.map(poke => poke.name))
    setLoading(false)
    setPokeNext(res.data.next)
    setPokeAntes(res.data.previous)
    })

    return () => cancel()

  }, [pokeInicial])

  if(loading) return <img className="ash" src={Ash} alt="Ash" />

  function proxPagina(){
    setPokeInicial(pokeNext)
  }

  function pagAnterior(){
    setPokeInicial(pokeAntes)
  }

  return (
    <>
    <Top/>
    <div className="App">
        <Pokelist pokemon={pokemon} />
        <Pagination proxPagina={pokeNext ? proxPagina : null} pagAnterior={pokeAntes? pagAnterior : null}/>
    </div>
    </>
  );
}

export default App;
