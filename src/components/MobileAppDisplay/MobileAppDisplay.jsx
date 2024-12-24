import React from 'react'
import './MobileAppDisplay.css'
import 'material-design-icons/iconfont/material-icons.css';

import googlePlayImage from '../../assets/play_store.png';
import appStoreImage from '../../assets/app_store.png';
import mockupImage from '../../assets/iphone.png';



const MobileAppDisplay = () => {
  return (
    <div className='mobile-app-display-container'>
        <div className='mobile-app-display'>
            <div className='mobile-app-display-text'>
                <h2>Download our Mobile App</h2>
                <p>Get food delivered to your doorstep with our mobile app</p>

                <div className='mobile-app-display-buttons'>
                    <img src={googlePlayImage} alt='Google Play' />
                    <img src={appStoreImage} alt='App Store' />
                </div>

             </div>

            <div className='mobile-app-display-mockup'>
                <img src={mockupImage} alt='Mobile App Mockup' />
            </div>

        </div>
    </div>
  )
}

export default MobileAppDisplay