import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'
import './home.css'

const Home = () => {
    const [typingStatus, setTypingStatus] = useState("human1");     // initial status is set as 'human1'
    return (
        <div className='home'>
            <img src="/orbital.png" alt="" className='orbital'/>
            <div className='left'>
                <h1>GEM AI</h1>
                <h2>Supercharge your creativity and productivity</h2>
                <h3>
                    Lorem ipsum dolor sit amet, dolore magna aliqua. Ut enim ad minim veniam,
                    laboris nisi ut aliquip ex ea commodo consequat.
                </h3>
                <Link to="/dashboard" className='dashboardLink'>Get Started</Link>
            </div>
            <div className='right'>
                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="starryBg"></div>
                    </div>
                    <img src="/bot.png" alt="" className='bot'/>
                    <div className="chat">
                        <img src={typingStatus === 'human1'? '/human1.jpeg': typingStatus === 'human2'? '/human2.jpeg': 'bot.png'} alt="" />
                        <TypeAnimation
                            sequence={[
                                'Human: produce food for Mice',
                                1000, () => {
                                    setTypingStatus("bot");
                                },
                                'Bot: produce food for Hamsters',
                                1000, () => {
                                    setTypingStatus("human2");
                                },
                                'Human:  produce food for Guinea Pigs',
                                1000, () => {
                                    setTypingStatus("bot");
                                },
                                'Bot produce food for Chinchillas',
                                1000
                            ]}
                            wrapper="span"
                            repeat={Infinity}
                            cursor={true}
                            omitDeletionAnimation={true}
                        />
                    </div>
                </div>
            </div>

            <div className="terms">
                <img src="/logo.png" alt="" />
                <div className="links">
                    <Link to="/">Terms of Service</Link>
                    <span>|</span>
                    <Link to="/">Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Home