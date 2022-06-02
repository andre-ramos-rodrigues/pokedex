import React from 'react'
import styles from '../styles/err.module.css'

export default function err() {
  return (
      <div className={styles.container}>
          <h3>Oops, parece que o Pokemon procurado não existe na Pokedex...</h3>
      </div>
    
  )
}
