import React from 'react'
import Footer from './footer';
import Navbar from './navbar';
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className='flex-1'>
                {
                    children
                }
            </div>
            <Footer />

        </div>
    );
};

export default Layout;



