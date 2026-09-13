import React from 'react';
import Hero from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto flex min-h-[480px] items-center justify-between gap-10 px-6 py-12 lg:px-12">

                <div className="w-full lg:w-1/2">

                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
                        Build Your Ideal
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 via-red-500 to-fuchsia-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-6 text-slate-600">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-3">
                        <button
                            className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500
                            px-4 py-2.5 text-sm font-semibold text-white
                            transition duration-200 hover:opacity-90"
                        >
                            Explore Technologies
                        </button>

                        <button
                            className="rounded-md border border-slate-200 bg-white
                            px-9 py-2.5 text-sm font-medium text-slate-600
                            transition duration-200 hover:bg-slate-50"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="hidden w-full items-center justify-center lg:flex lg:w-1/2">
                    <img
                        src={Hero}
                        alt="dev stack pic"
                        className="w-[340px] object-contain xl:w-[380px]"
                    />
                </div>

            </div>
        </section>
    )
};

export default Banner;