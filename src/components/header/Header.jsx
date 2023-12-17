import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import { PiTelegramLogoLight } from "react-icons/pi"
import { AiOutlineYoutube } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"

function Header() {
    return (
        <header>
            <div className="header_logo">
                <Link to={"/"}> <img src="https://res2.weblium.site/res/64d54c4fe435d0000fa1b0d7/64dd15a4e6d558000f0c7b4c_optimized_376?nowebp" alt="" /> </Link>
            </div>
            <div className="header_bars">
                <FaBars />
            </div>
            <div className="header_links">
                <Link to={'/vacancy'} className='vacansy'>Open vacancies</Link>
                <a href={'#faq'}>FAQ</a>
                <Link to={'/admin'} className='admin'>Admin</Link>
                <a target='blank' href="https://t.me/+998939119572">
                    <PiTelegramLogoLight className='icon' />
                </a>
                <AiOutlineYoutube className='icon' />
                <AiOutlineInstagram className='icon' />

            </div>

        </header>
    )
}

export default Header