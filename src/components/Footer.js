import React from 'react'
import {FaGithub, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-slate-900 py-2 border-t border-pink-600 text-center">
            <div className="inline-flex space-x-4 md:space-x-2 py-2 px-2 border border-yellow-400 rounded-xl">
               
            <p className="text-sm py-2 px-2 font-vcr">&copy; { new Date().getFullYear() } by Group 8</p>
        </footer>
    )
}
