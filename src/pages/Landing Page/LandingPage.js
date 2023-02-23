import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router'

import ImageGallery from 'react-image-gallery';


const LandingPage = () => {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];
    const navigate = useNavigate()
    return (
        <div className='LandingPageContainer'>
            <div className='LandingPageInnerContainer'>


                <ImageGallery items={images} />;




                {/* <div className='LandingPageTitle'>One:<span style={{color:'white'}}>AI</span></div>
                <div className='LandingPageSubTitle'>perfect the onboarding process</div>
                <div className='LandingPageButton' onClick={() => navigate('/home')} >
                    <div className='LandingPageButtonText'
                    >start your journey</div>
                </div> */}
            </div>
        </div >
    )
}

export default LandingPage