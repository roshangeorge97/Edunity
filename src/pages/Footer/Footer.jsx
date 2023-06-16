import React from 'react'
import {
    FaLinkedin,
    FaEnvelope,
    FaPhoneAlt,
    FaDiscord,
    FaGithub,
    FaTwitter,
} from "react-icons/fa";
import './Footer.css'


const Footer = () => {
    return (
        <>
            <div className='black'>
                <div className="container">
                    <div className='Left'>
                        <div className='logo'>Edunity.</div>
                        <div className='Desc'>
                            Creating a Platform where students preparing for competitive exams can connect with their Seniors to seek guidance for improving their grades on a one-one basis.
                        </div>
                        <div className='SocialContainer'>
                            < a href="https://github.com/roshangeorge97" className='SocialIcon' id='facebook'>
                                <FaGithub />
                            </a>
                            {/* <div className='SocialIcon' id='instagram'>
                            <FaInstagram />
                        </div> */}
                            <a href="https://twitter.com/dev_roshangeorg" className='SocialIcon' id='twitter'>
                                <FaTwitter />
                            </a>
                            <a href="https://twitter.com/dev_roshangeorg" className='SocialIcon ' id='discord'>
                                <FaDiscord />
                            </a>
                            <a href="roshangeorge2003@gmail.com" className='SocialIcon ' id='linkedin'>
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                    <div className='Center'>
                        <div className='Title'>Quick Links</div>
                        <div className='List' >
                            <a href="#home" className='ListItem'>Home</a>
                            <a href="#explore" className='ListItem'>Explore</a>
                            <a href="#myclasses" className='ListItem'>MyClasses</a>
                            <a href="#marketplace" className='ListItem'>Marketplace</a>
                            <a href="#signup" className='ListItem'>SignUp</a>
                            <a href="#becomeamentor" className='ListItem'>Become A Mentor</a>
                            <a href="#feed" className='ListItem'>Feed</a>
                        </div>
                    </div>
                    <div className='Right'>
                        <div className='Title'>Contact</div>
                        <div className='ContactItem'>
                            <FaGithub style={{ marginRight: "10px" }} /> https://github.com/roshangeorge97/Edunity
                        </div>
                        <div className='ContactItem'>
                            <FaPhoneAlt style={{ marginRight: "10px" }} /> +1 234 56 78
                        </div>
                        <div className='ContactItem'>
                            <FaEnvelope style={{ marginRight: "10px" }} /> roshangeorge2003@gmail.com
                        </div>
                    </div>
                </div>
            </div>

            <div className='fpart'>
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by
                            <a href="#">  Edunity</a>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer


//  ${mobile({ backgroundColor: "#fff8f8" })}