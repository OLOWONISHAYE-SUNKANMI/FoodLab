import React from 'react'
import './Footer.css'  
import logo  from '../../assets/logo.png'
import 'material-design-icons/iconfont/material-icons.css' 
import Facebook from '../../assets/facebook.png'
import Social_Media from '../../assets/social-media.png'    
import Instagram from '../../assets/instagram.png'  

const Footer = () => {
  return (
   
    <footer className="footer"> 
        <div className="container">
            <img src={logo} alt=''></img>

            <div className='footer__links'>
                <h2>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Menu</li>
                    <li>Mobile Apps</li>
                    <li>Contact</li>
                </ul>
            </div>
            
            <div className='footer__content'>
                <h2>Sign up for exclusive deals and updates!</h2>
                <form>
                    <input type='email' placeholder='Enter your email address'></input>
                    <button>Sign Up</button>
                </form>

                <div className='footer__socials'>
                   <img src={Facebook} alt=''></img>
                   <img src={Social_Media} alt=''></img>
                    <img src={Instagram} alt=''></img>   
                </div>
            </div>
           
          
        </div>        
    </footer>
  )
}

export default Footer