import React, { useEffect, useRef } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames, gameSelector } from '../../store/gameSlice';
import HomeSingleItem from '../../components/HomeSingleItem/HomeSingleItem';

import logos from '../../assets/logos/logoController';
import PopUp from '../../components/PopUp/PopUp';
import topScroll from '../../assets/images/topScroll.png';
import senior from "../../assets/images/backgroundAI2.jpg"


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
            release_date: 'AI generated code review'
        },
        {
            title: 'Code Enhancement',
            thumbnail: senior,
            release_date: 'Refactor your code to perfection'
        },

        {
            title: 'Content Scribe',
            thumbnail: senior,
            release_date: 'Generate production grade content '
        },
        {
            title: 'Team Alignment',
            thumbnail: senior,
            release_date: 'Conform your code to team principles'
        },
        {
            title: 'Math Reducer',
            thumbnail: senior,
            release_date: 'Simplify complex math problems'
        },
        {
            title: 'Private Tutor',
            thumbnail: senior,
            release_date: 'Personilize your learning experience'
        }

    ]
    // developer
    // :
    // "Toylogic Inc."
    // freetogame_profile_url
    // :
    // "https://www.freetogame.com/warlander"
    // game_url
    // :
    // "https://www.freetogame.com/open/warlander"
    // genre
    // :
    // "MOBA"
    // id
    // :
    // 547
    // platform
    // :
    // "PC (Windows)"
    // publisher
    // :
    // "Plaion"
    // release_date
    // :
    // "2023-01-24"
    // short_description
    // :
    // "A medieval-style combat game with a selection of modes and characters."
    // thumbnail
    // :
    // "https://www.freetogame.com/g/547/thumbnail.jpg"

    /*
    the useEffect dispatches via the gameSlice a thunk request to get game information from the api.
    the gameOptions dependancy is there so the api call will happen again and rerender the page
     if the user changes the category filter, but not if the user clicks on the same icon again
    */



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
                                <br /> An enterprise level onbarding tool for junior developers.
                                Here you will find the best methods to maximize the efficiency
                                of your newly recruited team members</div>

                        <div className='center main_title red'>Our Tools</div>

                            <div className='HomeContainerGrid'>
                                {homeGamesArray?.length > 0 && <div
                                    className={'HomeInnerGrid'}>
                                    {homeGamesArray?.map((v, i) => (
                                        <div className='singleItem' key={v.id}>
                                            <HomeSingleItem data={v} />
                                        </div>
                                    ))}
                                </div>}
                            </div>

                            <img src={topScroll} className='topScroll' alt='scroll to top' title='Scroll to top' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }} />
                        </>}
                </div>
                {/* <SideNav resetReffHandler={resetReffFatherHandler} /> */}
            </div >}
            {showPopUp && <PopUp />}
        </>);
};

export default Home;
