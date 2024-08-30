'use client'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button } from '../components/ui/button'
import logo from '../images/1.jpg'
import hbdcel from '../pages/hbdcel'
import { animateScroll as scroll } from 'react-scroll';

export default function Component() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100">
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
                    scrolled
                        ? 'bg-gray-50/90 backdrop-blur-sm shadow-md h-16'
                        : 'bg-gradient-to-b from-gray-50 to-gray-100 h-20'
                }`}
            >
                <div className="container mx-auto px-4 h-full flex items-center justify-between">
                    <Button
                        onClick={() => window.location.href = '/'}
                        className="p-0 bg-transparent hover:bg-transparent"
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className={`transition-all duration-300 ease-in-out ${scrolled ? 'h-8' : 'h-10'}`}
                        />
                    </Button>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><Link to="/" spy={true} smooth={true} duration={500} className="inline-block text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-[1px_1px_0_0_rgba(0,0,0,0.1)] hover:shadow-[0.5px_0.5px_0_0_rgba(0,0,0,0.1)] active:shadow-inner active:translate-y-0.5 transition-all duration-150 rounded-sm px-6 py-2 border border-gray-200">Home</Link></li>
                            <li><Link to="/about" spy={true} smooth={true} duration={500} className="inline-block text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-[1px_1px_0_0_rgba(0,0,0,0.1)] hover:shadow-[0.5px_0.5px_0_0_rgba(0,0,0,0.1)] active:shadow-inner active:translate-y-0.5 transition-all duration-150 rounded-sm px-6 py-2 border border-gray-200">About</Link></li>
                            <li><Link to="/contact" spy={true} smooth={true} duration={500} className="inline-block text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-[1px_1px_0_0_rgba(0,0,0,0.1)] hover:shadow-[0.5px_0.5px_0_0_rgba(0,0,0,0.1)] active:shadow-inner active:translate-y-0.5 transition-all duration-150 rounded-sm px-6 py-2 border border-gray-200">Contact</Link></li>
                            <li><Link to="/hbdcel" className="inline-block text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-[1px_1px_0_0_rgba(0,0,0,0.1)] hover:shadow-[0.5px_0.5px_0_0_rgba(0,0,0,0.1)] active:shadow-inner active:translate-y-0.5 transition-all duration-150 rounded-sm px-6 py-2 border border-gray-200">HBD</Link></li>
                            <li><Link to="/login" className="inline-block text-gray-700 bg-gray-100 hover:bg-gray-200 shadow-[1px_1px_0_0_rgba(0,0,0,0.1)] hover:shadow-[0.5px_0.5px_0_0_rgba(0,0,0,0.1)] active:shadow-inner active:translate-y-0.5 transition-all duration-150 rounded-sm px-6 py-2 border border-gray-200">Login</Link></li>
                            
                        </ul>
                    </nav>
                </div>
            </header>

            {/* <main className="container mx-auto px-4 pt-32">
                <h2 className="text-2xl font-bold mb-4">Welcome to our page</h2>
                {[...Array(2)].map((_, i) => (
                    <p key={i} className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor.
                    </p>
                ))}
            </main> */}
            
        </div>
    )
}