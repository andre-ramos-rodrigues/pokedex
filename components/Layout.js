import React from 'react'
import Navbar from './Navbar'
import Head from 'next/ead'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
    <Head>
        <link rel='shortcut icon' href='/images/favicon.ico' />
        <title>Pokedex</title>
    </Head>
    <Navbar />
    <main className='main-container'>{ children }</main>
    <Footer />
    </>
  )
}
