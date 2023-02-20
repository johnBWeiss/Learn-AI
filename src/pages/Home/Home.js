import React, { useEffect, useRef } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames, gameSelector } from '../../store/gameSlice';
import HomeSingleItem from '../../components/HomeSingleItem/HomeSingleItem';
import SideNav from '../../components/SideNav/SideNav';
import CustomSpinner from '../../components/Spinner/Spinner';
import Pagination from '../../components/Pagination/Pagination';
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
            title: 'mobile senior',
            thumbnail: senior,
            release_date: 'AI generated code review'
        },
        {
            title: 'code enhancement',
            thumbnail: senior,
            release_date: 'refactor your code to perfection'
        },
        {
            title: 'team alignment',
            thumbnail: senior,
            release_date: 'conform your code via team principles'
        },
        {
            title: 'team alignment',
            thumbnail: senior,
            release_date: 'conform your code via team priciples'
        },
        {
            title: 'team alignment',
            thumbnail: senior,
            release_date: 'conform your code via team priciples'
        },
        {
            title: 'team alignment',
            thumbnail: senior,
            release_date: 'conform your code via team priciples'
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
        dispatch(getAllGames([gameOptions, { indexStart: 0 }]));
    }, [gameOptions, dispatch])

    //The resetReffFatherHandler function resets the current index so each new search will display the results from the beginning

    const resetReffFatherHandler = () => {
        indexRef.current = 0;
    }



    return (

        <>
            {!showPopUp && <div className='HomeContainer'>
                <div className='HomeInnerContainer'>
                    <div className='banner'>
                        <div className='HomeDynamicTitle'>One<span style={{ fontSize: '135px' }}>:</span><span style={{ color: 'white' }}>AI</span>

                        </div>   <div className=' byLine' >             hyper optimize junior developers
                        </div>
                    </div>
                    {!pending &&
                        <>


                            <div className='mainParagraph'><span className='center red title'>Welcome to One:AI</span>
                                <br /> A hyper efficient onbarding tool for junior developers.
                                Here you will find the best methods to maximize the efficieny
                                of your newly recruited team members</div>

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



                            {/* <Pagination left={{ src: leftPaginate.src, title: leftPaginate.title }} right={{ src: rightPaginate.src, title: rightPaginate.title }}
                                index={indexRef.current} gameArrayLength={homeGamesArrayTotalLength}
                                fatherPagination={pagination} /> */}
                            <img src={topScroll} className='topScroll' alt='scroll to top' title='Scroll to top' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }} />
                        </>}
                </div>
                {/* <SideNav resetReffHandler={resetReffFatherHandler} /> */}
            </div >}
            {showPopUp && <PopUp />}
        </>);
};

export default Home;
