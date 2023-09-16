import React from 'react'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from './partials/Header';
import Footer from './partials/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout app">
            <header className="header sticky-top">
                <Header />
            </header>

            <ToastContainer
                position="top-center"
                autoClose={2500}
                newestOnTop={true}
                closeOnClick
                draggable
                pauseOnHover
                theme="colored"
            />

            <main className="main">{children}</main>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
  )
}

export default DefaultLayout