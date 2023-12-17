import React from 'react'
import { useTypewriter, cursor } from 'react-simple-typewriter'
import './About.css'
import video1 from './video/Media_230910_212930.gif'
import image1 from './images/Bratishkina_CEO_theWORK.jpg'
import Vacancy from '../../routes/vacancy/Vacancy'
import { Link } from 'react-router-dom'

function About() {
    const [typeEffect] = useTypewriter({
        words: ['INTERNATIONAL CAREER', 'Locking for a job?', 'Hospitality recruitment', 'TOP employers'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    })

    return (
        <div className="about">
            <div className='banner1'>
                <img src={video1} className='imggif' />
                <div className="textbanner1">

                    <h1>
                        <typewriter>
                            <h1 className='h1typewriter'> {typeEffect}</h1>
                        </typewriter>
                    </h1>
                    <p className='p'>We are connecting talents from all over the world with amazing opportunities in the Middle East</p>
                    <button className='aboutbutton'><link rel="stylesheet" href={<Vacancy/>} /> go to vacancy</button>
                </div>
                <div className='banner2'>
                    <div className="banner_left">
                        <div className="banner2_top">
                            <div className="textbanner_top">
                                <h1>ABOUT</h1>
                                <h3 className='orange'>the</h3>
                                <h1 className='orange'> work</h1>
                            </div>

                        </div>
                        <div className="banner_bottom">
                            <h1>&#10078;</h1>
                            <p className='pi' >We founded theWORK in 2016 to connect ambitious candidates who are looking to explore the world and build an international career with opportunities to work in the best hospitality brands in the Middle East."</p>
                            <p className='pi' >Hospitality is not a job; it is a lifestyle. No matter where you are from, whether you are an aspiring talent or an experienced professional, if you have a calling for hospitality, we would be happy to help you find your next challenge.</p>
                            <h5>Oksana Bratishkina, <br />
                                Co-founder and COO theWORK</h5>
                        </div>
                    </div>
                    <div className="banner_right">
                        <img src={image1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About
