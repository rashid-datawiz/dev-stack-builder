import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import TechnologyCard from './components/TechnologyCard'
import type { ITechnology } from './types/stackType'
import Footer from './components/Footer'

const techFetch = async():Promise<ITechnology[]> =>{
  const res = await fetch('/data.json')
  const data = await res.json()
  return data;
}

function App() {
  //console.log(techStackPromise)
  const techStackPromise = techFetch()
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading...</h2>}>
        <TechnologyCard techStackPromise = {techStackPromise}></TechnologyCard>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
