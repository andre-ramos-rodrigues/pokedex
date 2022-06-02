import React from 'react'
import Navbar from './navbar'
import Head from 'next/head'
import Footer from './footer'

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
