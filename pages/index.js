import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Card from '../components/Card'

export async function getStaticProps() { // função que pega os dados dos Pokemons na API

  const maxPokemons = 151

  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`) // pegando os dados com limite de 151 Pokemons

  const data = await res.json()

  data.results.forEach((item, index) => { // adicionando uma id para cada pokemon baseado em seu index
    item.id = index + 1
  })

  return {
    props: { 
      pokemons: data.results // retornando os dados como objects em props
     }
  }

}

export default function Home({ pokemons }) { // agora podemos usar os dados
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Dex</span></h1>
        <Image 
        src='/images/pokeball.png' 
        alt='pokebola' 
        height='50' 
        width='50'/>
      </div>
      
      <div className={styles.pokemon_container}>
        { 
          pokemons.map((pokemon) => (
           <Card key={pokemon.id} pokemon={pokemon}/>
          ))}
      </div>
    </>
  )
}
