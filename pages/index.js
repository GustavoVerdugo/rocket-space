import Head from 'next/head'
import Header from '../components/Header'
import SwiperSlide from '../components/SwiperSlide'
import BrandSlider from '../components/BrandSlider'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-black overflow-x-hidden justify-between">
      <Head>
        <title>Rocket Space</title>
      </Head>
      <Header/>
      <main className="flex flex-col">
        <SwiperSlide />
      </main>
      <Footer />
    </div>
  )
}