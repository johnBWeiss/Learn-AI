import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router'



const LandingPage = () => {

    const navigate = useNavigate()
    return (
        <div className='LandingPageContainer'>
            <div className='LandingPageInnerContainer'>
                <div className='LandingPageTitle'>One:<span style={{color:'white'}}>AI</span></div>
                <div className='LandingPageSubTitle'>perfect the onboarding process</div>
                <div className='LandingPageButton' onClick={() => navigate('/home')} >
                    <div className='LandingPageButtonText'
                    >start your journey</div>
                </div>
            </div>
        </div >
    )
}

export default LandingPage