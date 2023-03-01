import React, { useEffect } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { gameSelector, pageDetails } from '../../store/gameSlice';
import PopUp from '../../components/PopUp/PopUp';
import HomeSingleItem from '../../components/HomeSingleItem/HomeSingleItem';

import topScroll from '../../assets/images/topScroll.png';
import senior from "../../assets/images/backgroundAI2.jpg"
import abstract from '../../assets/images/back-1.jpg'
import data from "../../assets/images/back-3.jpg"
import scribe from "../../assets/images/back-2.jpg"
import back4 from "../../assets/images/back-4.jpg"
import back5 from "../../assets/images/back-5.jpg"


const Home = ({ location }) => {
    console.log(location);



    const dispatch = useDispatch();
    const gameSlice = useSelector(gameSelector);
    const { showPopUp } = gameSlice;
    let homeGamesArray = [
        {
            title: 'Code Review',
            thumbnail: senior,
            dividerColor: 'rgb(255, 234, 234)',
            release_date: 'AI generated senior mentor',
            span: 'span 2',
            navTitle: 'mobile-senior',

            byLine: 'save expenses with an AI powered mentor',
            secondTitle: 'Fast track your juniors onboarding process',
            paragraph: `A junior developer needs to be mentored constantly
             for a long period of time before he can pull his own weight. His code can be messy, unconformed to the teams guidlines and conventions, and utterly unscalable and unreadable. In face, it can be said in some caes that a junior debeloper left unchecked can cause more harm than good.
              This can get expensive fast,
             as a senior is required to step away from his assignments for the sake of mentoring. Enter One AI, an innovative tool built to hone your coding skills, catch your mistakes, and refactor your code to fut seamleslly with the team.
              
      `  },
        //     {
        //         title: 'Code Enhancement',
        //         thumbnail: abstract,
        //         release_date: 'Refactor your code to perfection',
        //         dividerColor: 'rgb(182, 249, 255)',
        //         navTitle: 'code-enhancement',



        //         // byLine: 'save expenses with an AI powered mentor',
        //         secondTitle: 'level up your code',
        //         paragraph: `A junior developer often writes poorly structured code. It takes many months of experience 
        //         to learn how to write scalable code that adheres to the DRY principle. With One AI, your junior dev will refactor his code with one click, 
        //         learning in the process how to improve his code writing principles. 

        //   `
        //     },

        {
            title: 'Content Generator',
            thumbnail: back5,
            navTitle: 'content-generator',

            release_date: 'create production-grade content ',
            secondTitle: 'Beautify your content',
            paragraph: `Every app needs quality content, which isn't easy to write on your own. With One Ai, you
            can save time and effort by utilizing our platform to generate high quality content quickly, on any subject in the world.
           
          `
        },
        // {
        //     title: 'Team Alignment',
        //     navTitle: 'team-alignment',

        //     thumbnail: back5,
        //     release_date: 'Conform your code to team principles',
        //     secondTitle: 'unify your codebase',
        //     paragraph: `A high quality code base is one with a recurring
        //      style with obvious structure and best practice syntax, making it easy to read and orient you rposition in the codebase.
        //      enforcing code unity is a daunting challenge on your own, but with One AI, you can conform your entire code base to a specific ruleset with one click!
        //   `
        // },
        {
            title: 'Math compiler',
            thumbnail: data,
            navTitle: 'math-compiler',

            release_date: 'Simplify complex data visualization',
            secondTitle: 'create stunning data visualization',
            paragraph: `building data visulization dashboards is no east feat. The svg-centric animations are difficult and require deep knowledge
            of math principles to pull of consistently. With one AI, you can have your calculations carried for you in seconds, 
            saving you a significant amount of time and effort.
          `
        },
        {
            title: 'Private Tutor',
            navTitle: 'private-tutor',
            thumbnail: abstract,
            release_date: 'Personilize your learning experience',
            secondTitle: 'improve learning efficiency',
            paragraph: `Being a junior developer means devoting most of your day to learning. 
            Expedite this process
            by having an AI tool that can answer extremly specific questions regarding your immedsite needs and taking into account your own code.
          `
        }

    ]



    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        dispatch(pageDetails({
            backgroundImage: null,

        }))
    }, [])
    useEffect(() => {
        const test = location?.state && location?.state?.message;
        console.log(test);
    }, [location])


    return (

        <>
            {true && <div className='HomeContainer'>
                <div className='HomeInnerContainer'>
                    <div className='banner'>
                        <div className='HomeDynamicTitle'>One<span className='snakeEyes' >:</span><span style={{ color: 'white' }}>AI</span>

                        </div>   <div className=' byLine' >             hyper optimize junior developers
                        </div>
                    </div>
                    <div className='mainParagraph'><span className='center red title'>Welcome to One AI</span>
                        <br /> An enterprise level onboarding tool for junior developers.
                        Here you will find the best methods to maximize the efficiency
                        of your newly recruited team members</div>
                    {data}

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
                </div>
            </div >}
            {/* {showPopUp && <PopUp />} */}
        </>);
};

export default Home;
