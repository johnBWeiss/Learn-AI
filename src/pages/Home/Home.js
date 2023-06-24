import React, { useEffect } from 'react';
import './Home.css';
import { useDispatch } from 'react-redux';
import {  pageDetails } from '../../store/gameSlice';
import HomeSingleItem from '../../components/HomeSingleItem/HomeSingleItem';

import topScroll from '../../assets/images/topScroll.png';
import senior from "../../assets/images/backgroundAI2.jpg"
import abstract from '../../assets/images/back-1.jpg'
import data from "../../assets/images/back-3.jpg"
import back5 from "../../assets/images/back-5.jpg"


const Home = () => {



    const dispatch = useDispatch();

    let homeGamesArray = [
        {
            title: 'Code Review',
            thumbnail: senior,
            dividerColor: 'rgb(255, 234, 234)',
            release_date: 'AI generated mentor',
            span: 'span 2',
            navTitle: 'mobile-senior',

            byLine: 'Save expenses with an AI powered mentor',
            secondTitle: `Accelerate the onboarding process`,
            paragraph: `Most junior developers need constant mentoring,
             but their seniors can only spare precious few sessions for them.
              `,
            paragraph2: ` Our advanced AI solution provides a comprehensive approach to improving coding abilities, detecting errors, and aligning code with team standards. `
            , paragraph3: `This product can allow senior developers to concentrate on their 
            own tasks while the AI technology assists in mentoring, saving a considerable amount of time and money` },

        {
            title: 'Content Generator',
            thumbnail: back5,
            navTitle: 'content-generator',

            release_date: 'Create production-grade content ',
            secondTitle: 'Content generation made easy',
            paragraph: `Composing quality content for an app can be challenging to accomplish independently.
              `, paragraph2: `Learn AI provides a solution by enabling you to efficiently generate high-quality content on any subject worldwide, saving you time and effort.
           
         `
        },
              {
            title: 'Math Compiler',
            thumbnail: data,
            navTitle: 'math-compiler',

            release_date: 'Simplify complex data visualization',
            secondTitle: 'create stunning dashboards',
            paragraph: `Developing data visualization dashboards can be a formidable challenge that demands a significant amount of expertise and resources.
              `, paragraph2: `The SVG-centric animations used in these dashboards require in-depth mathematical knowledge to create and maintain consistently. 
            `, paragraph3: `   With Learn AI, you can eliminate the need for specialized skills and free up valuable resources, allowing you to focus on other critical aspects of your project.
        `
        },
        {
            title: 'Private Tutor',
            navTitle: 'private-tutor',
            thumbnail: abstract,
            release_date: 'Personilize your learning experience',
            secondTitle: 'improve learning efficiency',
            paragraph: `As a junior developer, a considerable amount of time is typically spent on learning. 
            
          `, paragraph2: `This process can be accelerated by utilizing an AI tool that can provide answers to highly specific questions tailored to your immediate needs, while incorporating your own code in the process.`
        }

    ]



    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        dispatch(pageDetails({
            backgroundImage: null,

        }))
    }, [dispatch])



    return (

        <>
            {true && <div className='HomeContainer'>
                <div className='HomeInnerContainer'>
                    <div className='banner'>
                        <div className='HomeDynamicTitle'>Learn<span className='snakeEyes' > </span><span style={{ color: 'white' }}>AI</span>

                        </div>   <div className=' byLine' >             hyper optimize junior developers
                        </div>
                    </div>
                    <div className='mainParagraph'><span className='center red title'>Welcome to Learn AI</span>
                        <br /> Our enterprise-level onboarding tool for junior developers is designed to optimize the efficiency of your newly recruited team members. With this tool, you can access the most effective methods to enhance the onboarding process, ensuring that your team members can quickly and efficiently integrate into your organization.</div>
                    {data}

                    <div className='center main_title red'>Our Tools</div>

                    <div className='HomeContainerGrid'>
                        {homeGamesArray?.length > 0 && <div
                            className={'HomeInnerGrid'}>
                            {homeGamesArray?.map((v) => (
                                <div className='singleItem' key={v.title} >
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
