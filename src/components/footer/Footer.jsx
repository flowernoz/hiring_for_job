import React from 'react'
import './Footer.css'
import {LiaTelegramPlane} from 'react-icons/lia'
import {AiFillYoutube} from 'react-icons/ai'
import {BiLogoLinkedin} from 'react-icons/bi'
function Footer() {
    return (
        <footer>
            <div>
                <img src="https://res2.weblium.site/res/64d54c4fe435d0000fa1b0d7/64dd184eb38659000fb4be18_optimized_396?nowebp" alt="footerimg" />
                <p>
                    Created by theW</p>
            </div>
            <div>
                <p>Follow Us</p>
                <div>
                    <span><LiaTelegramPlane/></span>
                    <span><AiFillYoutube/></span>
                    <span><BiLogoLinkedin/></span>
                </div>
                <button>For employes</button>
                <p>All rights Reserved. 2023</p>
            </div>

        </footer>
    )
}

export default Footer
