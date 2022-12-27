import Head from 'next/head'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import RocketList from '../components/RocketList'
import useFetch from '../services/hookFetch';

export default function Tienda() {

  const { loading, data: rockets } = useFetch("https://api.spacexdata.com/v3/rockets")

  return (
    <div className="flex flex-col h-screen bg-black overflow-x-hidden justify-between">
      <Header />
      {loading ?
        <div class=" flex justify-center items-center">
          <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
        </div> :
        <main className="flex">
          <RocketList data={rockets} />
        </main>
      }
      <Footer />
    </div>
  )
}