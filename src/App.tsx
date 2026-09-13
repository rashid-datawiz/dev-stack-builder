import { Suspense } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'

import Banner from './components/Banner'
import Navbar from './components/Navbar'
import TechnologyCard from './components/TechnologyCard'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

import type { ITechnology } from './types/stackType'

const techFetch = async (): Promise<ITechnology[]> => {
    const res = await fetch('/data.json')
    const data = await res.json()
    return data
}

function App() {
    const techStackPromise = techFetch()

    return (
        <>
            <Navbar />

            <Banner />

            <Suspense
                fallback={
                    <div className="flex min-h-[200px] items-center justify-center">
                        <h2 className="text-sm text-slate-500">
                            Loading...
                        </h2>
                    </div>
                }
            >
                <TechnologyCard
                    techStackPromise={techStackPromise}
                />
            </Suspense>

            <Footer />

            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default App