import Image from 'next/image'
import styles from '../../styles/Pokemon.module.css'

/*

Essa é a página dinâmica de Pokemons. Para cada Pokemon clicado na página Home, essa página abrirá com os dados relativos
ao Pokemon selecionado. Para isso é necessário informar os paths de cada Pokemon e, baseado nesses paths, recuperar os dados
relativos ao pokemon escolhido e renderizá-los na página.

*/

export const getStaticPaths = async () => { // função que vai retornar o path de cada pokemon

    const maxPokemons = 151 // definindo o numero maxímo de pokemons

    const api = 'https://pokeapi.co/api/v2/pokemon/'
  
    const res = await fetch(`${api}/?limit=${maxPokemons}`) // fetch com número máximo definido
  
    const data = await res.json() // passa os dados pra json

    const paths = data.results.map((pokemon, index) => { // definindo o path para cada Pokemon baseado no seu índice
        return {
            params: {pokemonId: (index + 1).toString()} // passando para string
        }
    })

    return {
        paths, fallback: false // retornando path e o fallback false pois queremos que seja pré-renderizado
    }
}

export const getStaticProps = async ( context ) => { // função que vai acessar o path do pokemon selecionado
  
    const id = context.params.pokemonId // id definida baseada no pokemonId da função acima

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) // recupera os dados somente do pokemon acessado

    const data = await res.json() // passa os dados pra json

    return {
        props: { pokemon: data } // retorna os dados como object para serem usados como props
    }
}


export default function Pokemon({ pokemon }) { // agora temos acesso aos dados do pokemon escolhido
  return (
    <div className={styles.pokemon_container}>
        <h1 className={styles.title}>{pokemon.name}</h1>
        <Image 
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} 
        alt={pokemon.name} height='220' width='220'/>
        <div>
            <h3>Número:</h3>
            <p>#{pokemon.id}</p>
        </div>
        <div>
            <h3>Tipo:</h3>
            <p className={styles.types}>{pokemon.types.map((item, index) => 
            <span key={index} 
            className={`${styles.type} ${styles['type_' + item.type.name]}`}>
            {item.type.name}
            </span>
            )}</p>
        </div>
        <div className={styles.data_container}>
            <div className={styles.height}>
            <h4>Altura:</h4>
            <p>{pokemon.height * 10} cm</p>
            </div>
            <div className={styles.weight}>
            <h4>Peso:</h4>
            <p>{pokemon.weight / 10} kg</p>
            </div>
        </div>
        

    </div>
  )
}
