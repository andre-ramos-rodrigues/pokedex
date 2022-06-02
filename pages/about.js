import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'


export default function about() {
  return (
    <div className={styles.container}>
        <span className={styles.img}>
            <Image src='../public/images/charizard.png' alt='charizard' height='400' width='400'/>
        </span>
        <span className={styles.description}>
            <h2>Pokedex</h2>
            <p>Pokedex é um compilador de Pokemons que simula o aparelho usado pelo Ash no desenho</p>
        </span>
        
    </div>
  )
}
