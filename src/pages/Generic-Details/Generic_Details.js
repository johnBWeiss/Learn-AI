import React, { useEffect, useRef } from 'react';
// import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames, gameSelector } from '../../store/gameSlice';
import HomeSingleItem from '../../components/HomeSingleItem/HomeSingleItem';

import logos from '../../assets/logos/logoController';
import PopUp from '../../components/PopUp/PopUp';
import topScroll from '../../assets/images/topScroll.png';
import senior from "../../assets/images/backgroundAI2.jpg"
import data from "../../assets/images/data.png"
import abstract from '../../assets/images/abstractCode.jpg'
import scribe from "../../assets/images/scribe.jpg"


const Generic_Details = () => {
    const { rightPaginate, leftPaginate } = logos;
    const indexRef = useRef(0);
    const dispatch = useDispatch();
    const gameSlice = useSelector(gameSelector);
    const { homeGamesArrayTotalLength, homeGamesArrayTitle, pending, showPopUp, gameOptions } = gameSlice;
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
                        </div>
                    </div>
                    {!pending &&
                        <>


                            <div className='mainParagraph'><span className='center red title'>Welcome to One:AI</span>
                                <br /> An enterprise level onboarding tool for junior developers.
                                Here you will find the best methods to maximize the efficiency
                                of your newly recruited team members</div>

                            <div className='center main_title red'>Our Tools</div>

                            {/* <div className='HomeContainerGrid'>
                                {homeGamesArray?.length > 0 && <div
                                    className={'HomeInnerGrid'}>
                                    {homeGamesArray?.map((v, i) => (
                                        <div className='singleItem' key={v.id} >
                                            <HomeSingleItem data={v} />
                                        </div>
                                    ))}
                                </div>}
                            </div> */}

                            <img src={topScroll} className='topScroll' alt='scroll to top' title='Scroll to top' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }} />
                        </>}
                </div>
                {/* <SideNav resetReffHandler={resetReffFatherHandler} /> */}
            </div >}
            {showPopUp && <PopUp />}
        </>);
};

export default Generic_Details;
