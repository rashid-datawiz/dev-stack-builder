import React from 'react'
import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-white container mx-auto">

            
            <div className="mx-w-6xl px-6 py-12">

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

                    
                    <div className="lg:col-span-2">

                        
                        <div className="flex items-center gap-2">

                            <img
                                src={Logo}
                                className="h-[30px] w-[100px] object-contain"
                                alt="Dev Stack"
                            />

                        </div>

                        
                        <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
                            Build your ideal development stack with the right
                            technologies for your next project.
                        </p>

                        
                        <div className="mt-5 flex items-center gap-3">

                            
                            <a
                                href="#"
                                aria-label="GitHub"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4 fill-current"
                                >
                                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.11.78-.25.78-.55v-2.01c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.95 10.95 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.08.78 2.18v3.23c0 .3.21.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                                    />
                                </svg>
                            </a>

                            
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4 fill-current"
                                >
                                    <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.4L6.45 22H3.35l7.24-8.28L2.8 2h6.4l4.43 5.86L18.9 2Zm-1.1 17.9h1.72L8.27 3.98H6.42L17.8 19.9Z" />
                                </svg>
                            </a>

                            
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-4 w-4 fill-current"
                                >
                                    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2.75 9.5h4.46V21H2.75V9.5ZM9.83 9.5h4.28v1.57h.06c.6-1.14 2.06-2.35 4.24-2.35 4.53 0 5.37 2.98 5.37 6.86V21h-4.46v-4.8c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.84 1.25-1.84 2.55V21H9.83V9.5Z" />
                                </svg>
                            </a>

                        </div>
                    </div>

                    
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                            Product
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm text-slate-500">
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-slate-900"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-slate-900"
                                >
                                    Stack Builder
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-slate-900"
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-slate-900"
                                >
                                    Features
                                </a>
                            </li>
                        </ul>
                    </div>

                    
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                            Company
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm text-slate-500">
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-slate-900"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-slate-900"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-slate-900"
                                >
                                    Blog
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-slate-900"
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                            Legal
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm text-slate-500">
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-slate-900"
                                >
                                    Privacy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-slate-900"
                                >
                                    Terms
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-slate-900"
                                >
                                    License
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-slate-900"
                                >
                                    Cookies
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                
                <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

                    
                    <p className="text-xs text-slate-400">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    
                    <div className="flex items-center gap-5 text-xs text-slate-400">
                        <a
                            href="#"
                            className="transition hover:text-slate-900"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-slate-900"
                        >
                            Terms
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer