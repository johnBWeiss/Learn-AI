import React, { useEffect } from 'react';
// import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import {  gameSelector } from '../../store/gameSlice';

import PopUp from '../../components/PopUp/PopUp';
import topScroll from '../../assets/images/topScroll.png';



const Generic_Details = () => {
    const dispatch = useDispatch();
    const gameSlice = useSelector(gameSelector);
    const {  pending, showPopUp } = gameSlice;
    console.log(gameSlice);


    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        
    }, [])






    return (

        <>
            {!showPopUp && <div className='HomeContainer'>
                <div className='HomeInnerContainer'>
                    <div className='banner'>
                        <div className='HomeDynamicTitle'> {gameSlice.pageDetails.title}

                        </div>   <div className=' byLine' >
                            {gameSlice.pageDetails.byLine}
                        </div>
                    </div>
                    {!pending &&
                        <>


                        <div className='mainParagraph' style={{ backgroundColor: gameSlice.pageDetails.dividerColor }}><span className='center red title'> {gameSlice.pageDetails.secondTitle}</span>
                                <br /> { } {gameSlice.pageDetails.paragraph}</div>

                            <div className='center main_title red'>Prompt Examples</div>



                            <img src={topScroll} className='topScroll' alt='scroll to top' title='Scroll to top' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }} />
                        </>}
                </div>
                {/* <SideNav resetReffHandler={resetReffFatherHandler} /> */}
            </div >}
            {showPopUp && <PopUp />}
        </>);
};

export default Generic_Details;
