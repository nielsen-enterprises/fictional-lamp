import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Capabilities from '../components/Capabilities'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nielsen Aerospace Enterprises</title>
        <meta name="description" content="Advanced OSINT data processing and intelligence services for aerospace, defense, and enterprise applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div style={{minHeight: '100vh', background: '#f9fafb'}}>
        <Header />
        <Hero />
        <Services />
        <Capabilities />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
