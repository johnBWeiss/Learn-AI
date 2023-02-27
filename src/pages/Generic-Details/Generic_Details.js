import React, { useEffect } from 'react';
import './Generic_Details.css';
import { useDispatch, useSelector } from 'react-redux';
import { gameSelector } from '../../store/gameSlice';
import { useNavigate } from 'react-router';

import PopUp from '../../components/PopUp/PopUp';
import topScroll from '../../assets/images/topScroll.png';
import CarouselLib from '../../components/Carousel/Carousel';


const Generic_Details = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const gameSlice = useSelector(gameSelector);
    const { showPopUp } = gameSlice;


    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        // gameSlice?.pageDetails?.backgroundImage? navigate('/') : null
        if (!gameSlice?.pageDetails?.backgroundImage) {
            navigate('/')
        }
    }, [])






    return (

        <>
            {!showPopUp && <div className='HomeContainer'>
                <div className='HomeInnerContainer'>
                    <div className='banner'>
                        <div className='genericTitle'> {gameSlice.pageDetails.title}

                        </div>   <div className=' byLine' >
                            {gameSlice.pageDetails.byLine}
                        </div>
                    </div>



                    <div className='mainParagraph' style={{ backgroundColor: gameSlice.pageDetails.dividerColor }}><span className='center red title'> {gameSlice.pageDetails.secondTitle}</span>
                        <br /> { } {gameSlice.pageDetails.paragraph}</div>

                    <div className='center main_title red'>Prompt Examples</div>

                    <CarouselLib></CarouselLib>
                    <img src={topScroll} className='topScroll' alt='scroll to top' title='Scroll to top' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }} />

                </div>
            </div >}
            {showPopUp && <PopUp />}
        </>);
};

export default Generic_Details;