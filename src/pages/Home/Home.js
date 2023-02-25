import React, { useEffect, useRef } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames, gameSelector } from '../../store/gameSlice';
import HomeSingleItem from '../../components/HomeSingleItem/HomeSingleItem';

import logos from '../../assets/logos/logoController';
import PopUp from '../../components/PopUp/PopUp';
import topScroll from '../../assets/images/topScroll.png';
import senior from "../../assets/images/backgroundAI2.jpg"
import data from "../../assets/images/back-3.jpg"
import abstract from '../../assets/images/back-1.jpg'
import scribe from "../../assets/images/back-2.jpg"


const Home = () => {
    const { rightPaginate, leftPaginate } = logos;
    const indexRef = useRef(0);
    const dispatch = useDispatch();
    const gameSlice = useSelector(gameSelector);
    const { homeGamesArrayTotalLength, homeGamesArrayTitle, pending, showPopUp, gameOptions } = gameSlice;
    let homeGamesArray = [
        {
            title: 'Mobile Senior',
            thumbnail: senior,
            release_date: 'AI generated code review',
            span: 'span 2',
            byLine: 'save expenses with an AI powered mentor',
            secondTitle: 'Fast track your junior to senior',
            paragraph: `A junior developer needs to be mentored constantly
             for a long period of time nefore he can pull his own weight. This can get expensive fast,
             as a senior is required to step away from his assignments for the sake of mentoring. Enter One AI. With us you can use chat GPT as your source of knowledge,
              querying for the best possible code and practices.
              ',
      `  },
        {
            title: 'Code Enhancement',
            thumbnail: abstract,
            release_date: 'Refactor your code to perfection'
        },

        {
            title: 'Content Scribe',
            thumbnail: scribe,
            release_date: 'Generate production grade content '
        },
        {
            title: 'Team Alignment',
            thumbnail: senior,
            release_date: 'Conform your code to team principles'
        },
        {
            title: 'Math Reducer',
            thumbnail: data,
            release_date: 'Simplify complex data visualization'
        },
        {
            title: 'Private Tutor',
            thumbnail: senior,
            release_date: 'Personilize your learning experience'
        }

    ]



    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [])






    return (

        <>
            {!showPopUp && <div className='HomeContainer'>
                <div className='HomeInnerContainer'>
                    <div className='banner'>
                        <div className='HomeDynamicTitle'>One<span style={{ fontSize: '200px' }}>:</span><span style={{ color: 'white' }}>AI</span>

                        </div>   <div className=' byLine' >             hyper optimize junior developers
                        </div>
                    </div>
                    {!pending &&
                        <>


                            <div className='mainParagraph'><span className='center red title'>Welcome to One:AI</span>
                                <br /> An enterprise level onboarding tool for junior developers.
                                Here you will find the best methods to maximize the efficiency
                                of your newly recruited team members</div>

                            <div className='center main_title red'>Our Tools</div>

                            <div className='HomeContainerGrid'>
                                {homeGamesArray?.length > 0 && <div
                                    className={'HomeInnerGrid'}>
                                    {homeGamesArray?.map((v, i) => (
                                        <div className='singleItem' key={v.id} >
                                            <HomeSingleItem data={v} />
                                        </div>
                                    ))}
                                </div>}
                            </div>

                            <img src={topScroll} className='topScroll' alt='scroll to top' title='Scroll to top' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }} />
                        </>}
                </div>
            </div >}
            {showPopUp && <PopUp />}
        </>);
};

export default Home;
