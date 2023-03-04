import React, { useEffect, useState } from 'react';
import './Generic_Details.css';
import { useSelector } from 'react-redux';
import { gameSelector } from '../../store/gameSlice';
import { useNavigate } from 'react-router';

import PopUp from '../../components/PopUp/PopUp';
import topScroll from '../../assets/images/topScroll.png';
import CarouselLib from '../../components/Carousel/Carousel';

import f1 from '../../assets/images/back-1.jpg'
import f2 from '../../assets/images/back-3.jpg'
import f3 from '../../assets/images/back-5.jpg'
import f4 from '../../assets/images/backgroundAI2.jpg'
import fhome from '../../assets/images/home.png'

import pt1 from "../../assets/images/private-tutor/pt1.png"
import pt2 from "../../assets/images/private-tutor/pt2.jpeg"
import pt3 from "../../assets/images/private-tutor/pt3.jpeg"
import pt4 from "../../assets/images/private-tutor/pt4.jpeg"
import pt5 from "../../assets/images/private-tutor/pt5.jpeg"
import pt6 from "../../assets/images/private-tutor/pt6.jpeg"
import pt7 from "../../assets/images/private-tutor/pt7.jpeg"
import pt8 from "../../assets/images/private-tutor/pt8.jpeg"

import c1 from "../../assets/images/content/c1.jpeg"
import c2 from "../../assets/images/content/c2.jpeg"
import c3 from "../../assets/images/content/c3.jpeg"
import c4 from "../../assets/images/content/c4.jpeg"
import c5 from "../../assets/images/content/c5.jpeg"

import m1 from "../../assets/images/math svg/m1.jpeg"
import m2 from "../../assets/images/math svg/m2.jpeg"

import s1 from "../../assets/images/senior/s1.jpeg"
import s2 from "../../assets/images/senior/s2.jpeg"
import s3 from "../../assets/images/senior/s3.jpeg"
import s4 from "../../assets/images/senior/s4.jpeg"
import s5 from "../../assets/images/senior/s5.jpeg"
import s6 from "../../assets/images/senior/s6.jpeg"
import s7 from "../../assets/images/senior/s7.jpeg"
import s8 from "../../assets/images/senior/s8.jpeg"
import s9 from "../../assets/images/senior/s9.jpeg"
import s10 from "../../assets/images/senior/s10.jpeg"
import s11 from "../../assets/images/senior/s11.jpeg"

const Generic_Details = () => {
    const navigate = useNavigate()
    const gameSlice = useSelector(gameSelector);
    const [imgArray, setImageArray] = useState(null)
    const { showPopUp } = gameSlice;
    let mathArray = [{ src: m1 }, { src: m2 }]
    let tutorArray = [{ src: pt1 }, { src: pt1 }, { src: pt2 }, { src: pt3 }, { src: pt4 }, { src: pt5 }, { src: pt6 }, { src: pt7 }, { src: pt8 },]
    let senior = [{ src: s1 }, { src: s2 }, { src: s4 }, { src: s4 }, { src: s5 }, { src: s6 }, { src: s7 }, { src: s8 }, { src: s9 }, { src: s10 }, { src: s11 }]
    let content = [{ src: c1 }, { src: c2 }, { src: c3 }, { src: c4 }]

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        // gameSlice?.pageDetails?.backgroundImage? navigate('/') : null
        if (!gameSlice?.pageDetails?.backgroundImage) {
            navigate('/')
        }

        if (gameSlice.pageDetails.navTitle === 'math-compiler') {
            setImageArray(mathArray)
        }

        if (gameSlice.pageDetails.navTitle === 'private-tutor') {
            setImageArray(tutorArray)
        }

        if (gameSlice.pageDetails.navTitle === 'mobile-senior') {
            setImageArray(senior)
        }

        if (gameSlice.pageDetails.navTitle === 'content-generator') {
            setImageArray(content)
        }



    }, [gameSlice])


    return (
      <>
        {
          <div className="HomeContainer">
            <div className="HomeInnerContainer">
              <div className="banner">
                <div className="genericTitle">
                  {" "}
                  {gameSlice.pageDetails.title}
                </div>{" "}
                <div className=" genericByLine">
                  {gameSlice?.pageDetails?.byLine}
                </div>
              </div>
              <div
                className="mainParagraph"
                style={{ backgroundColor: gameSlice.pageDetails.dividerColor }}
              >
                <span className="center red title">
                  {" "}
                  {gameSlice.pageDetails.secondTitle}
                </span>
                <br /> {} {gameSlice?.pageDetails?.paragraph} <br></br>
                <br />
                <div>{gameSlice?.pageDetails?.paragraph2}</div>
                <br />
                {gameSlice?.pageDetails?.paragraph3}
              </div>
              <div className="center main_title red">Prompt Examples</div>
              {imgArray && <CarouselLib imgArray={imgArray}></CarouselLib>}
              <div
                className="space-between"
                style={{
                  width: "30vw",
                  marginBottom: "50px",
                  minWidth: "400px",
                }}
              >
                <img
                  src={fhome}
                  className="topScroll navButton"
                  alt="scroll to top"
                  title="home"
                  onClick={() => {
                    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    navigate("/");
                  }}
                />
                <img
                  src={f1}
                  className="topScroll navButton"
                  alt="scroll to top"
                  title="Scroll to top"
                  onClick={() => {
                    navigate("/");
                  }}
                />
                <img
                  src={f2}
                  className="topScroll navButton"
                  alt="scroll to top"
                  title="Scroll to top"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                />
                <img
                  src={f3}
                  className="topScroll navButton"
                  alt="scroll to top"
                  title="Scroll to top"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                />
                <img
                  src={f4}
                  className="topScroll navButton"
                  alt="scroll to top"
                  title="Scroll to top"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                />
                <img
                  src={topScroll}
                  className="topScroll navButton"
                  alt="scroll to top"
                  title="Scroll to top"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                />
              </div>
            </div>
          </div>
        }
      </>
    );
};

export default Generic_Details;
