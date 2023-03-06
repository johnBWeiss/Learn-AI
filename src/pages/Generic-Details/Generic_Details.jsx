import React, { useEffect, useState } from "react";
import "./Generic_Details.css";
import { useSelector } from "react-redux";
import { gameSelector } from "../../store/gameSlice";
import { useNavigate } from "react-router";
import { pageDetails } from "../../store/gameSlice";
import topScroll from "../../assets/images/topScroll.png";
import CarouselLib from "../../components/Carousel/Carousel";
import { useDispatch } from "react-redux";
import f1 from "../../assets/images/back-1.jpg";
import f2 from "../../assets/images/back-3.jpg";
import f3 from "../../assets/images/back-5.jpg";
import f4 from "../../assets/images/backgroundAI2.jpg";
import fhome from "../../assets/images/home.png";

import pt1 from "../../assets/images/private-tutor/pt1.png";
import pt2 from "../../assets/images/private-tutor/pt2.jpeg";
import pt3 from "../../assets/images/private-tutor/pt3.jpeg";
import pt4 from "../../assets/images/private-tutor/pt4.jpeg";
import pt5 from "../../assets/images/private-tutor/pt5.jpeg";
import pt6 from "../../assets/images/private-tutor/pt6.jpeg";
import pt7 from "../../assets/images/private-tutor/pt7.jpeg";
import pt8 from "../../assets/images/private-tutor/pt8.jpeg";

import c1 from "../../assets/images/content/c1.jpeg";
import c2 from "../../assets/images/content/c2.jpeg";
import c3 from "../../assets/images/content/c3.jpeg";
import c4 from "../../assets/images/content/c4.jpeg";

import m1 from "../../assets/images/math svg/m1.jpeg";
import m2 from "../../assets/images/math svg/m2.jpeg";
import m3 from "../../assets/images/math svg/gauge.png"

import s1 from "../../assets/images/senior/s1.jpeg";
import s2 from "../../assets/images/senior/s2.jpeg";
import s4 from "../../assets/images/senior/s4.jpeg";
import s5 from "../../assets/images/senior/s5.jpeg";
import s6 from "../../assets/images/senior/s6.jpeg";
import s7 from "../../assets/images/senior/s7.jpeg";
import s8 from "../../assets/images/senior/s8.jpeg";
import s9 from "../../assets/images/senior/s9.jpeg";
import s10 from "../../assets/images/senior/s10.jpeg";
import s11 from "../../assets/images/senior/s11.jpeg";

const Generic_Details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navHandler = (i) => {
    dispatch(
      pageDetails({
        title: detailsArray[i].title,
        backgroundImage: detailsArray[i].thumbnail,
        byLine: detailsArray[i].release_date,
        secondTitle: detailsArray[i].secondTitle,
        paragraph: detailsArray[i].paragraph,
        dividerColor: detailsArray[i].dividerColor,
        navTitle: detailsArray[i].navTitle,
        paragraph2: detailsArray[i].paragraph2,
        paragraph3: detailsArray[i].paragraph3,
      })
    );
    navigate(`/details/${detailsArray[i].navTitle}`, { replace: "true" });
  };

  const gameSlice = useSelector(gameSelector);
  const [imgArray, setImageArray] = useState(null);
  const detailsArray = [
    {
      title: "Code Review",
      thumbnail: f4,
      dividerColor: "rgb(255, 234, 234)",
      release_date: "AI generated mentor",
      span: "span 2",
      navTitle: "mobile-senior",

      byLine: "Save expenses with an AI powered mentor",
      secondTitle: `Accelerate the onboarding process`,
      paragraph: `Most junior developers need constant mentoring,
             but their seniors can only spare precious few sessions for them.
              `,
      paragraph2: ` Our advanced AI solution provides a comprehensive approach to improving coding abilities, detecting errors, and aligning code with team standards. `,
      paragraph3: `This product can allow senior developers to concentrate on their 
            own tasks while the AI technology assists in mentoring, saving a considerable amount of time and money`,
    },

    {
      title: "Content Generator",
      thumbnail: f3,
      navTitle: "content-generator",

      release_date: "Create production-grade content ",
      secondTitle: "Content generation made easy",
      paragraph: `Composing quality content for an app can be challenging to accomplish independently.
              `,
      paragraph2: `One AI provides a solution by enabling you to efficiently generate high-quality content on any subject worldwide, saving you time and effort.
           
         `,
    },
    {
      title: "Math compiler",
      thumbnail: f2,
      navTitle: "math-compiler",

      release_date: "Simplify complex data visualization",
      secondTitle: "create stunning dashboards",
      paragraph: `Developing data visualization dashboards can be a formidable challenge that demands a significant amount of expertise and resources.
              `,
      paragraph2: `The SVG-centric animations used in these dashboards require in-depth mathematical knowledge to create and maintain consistently. 
            `,
      paragraph3: `   With One AI, you can eliminate the need for specialized skills and free up valuable resources, allowing you to focus on other critical aspects of your project.
        `,
    },
    {
      title: "Private Tutor",
      navTitle: "private-tutor",
      thumbnail: f1,
      release_date: "Personilize your learning experience",
      secondTitle: "improve learning efficiency",
      paragraph: `As a junior developer, a considerable amount of time is typically spent on learning. 
            
          `,
      paragraph2: `This process can be accelerated by utilizing an AI tool that can provide answers to highly specific questions tailored to your immediate needs, while incorporating your own code in the process.`,
    },
  ];
  let mathArray = [{ src: m1 }, { src: m2 }, { src: m3 }];
  let tutorArray = [
    { src: pt1 },
    { src: pt1 },
    { src: pt2 },
    { src: pt3 },
    { src: pt4 },
    { src: pt5 },
    { src: pt6 },
    { src: pt7 },
    { src: pt8 },
  ];
  let senior = [
    { src: s1 },
    { src: s2 },
    { src: s4 },
    { src: s4 },
    { src: s5 },
    { src: s6 },
    { src: s7 },
    { src: s8 },
    { src: s9 },
    { src: s10 },
    { src: s11 },
  ];
  let content = [{ src: c1 }, { src: c2 }, { src: c3 }, { src: c4 }];
  console.log(gameSlice);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // gameSlice?.pageDetails?.backgroundImage? navigate('/') : null
    if (!gameSlice?.pageDetails?.backgroundImage) {
      navigate("/");
    }

    if (gameSlice.pageDetails.navTitle === "math-compiler") {
      setImageArray(mathArray);
    }

    if (gameSlice.pageDetails.navTitle === "private-tutor") {
      setImageArray(tutorArray);
    }

    if (gameSlice.pageDetails.navTitle === "mobile-senior") {
      setImageArray(senior);
    }

    if (gameSlice.pageDetails.navTitle === "content-generator") {
      setImageArray(content);
    }
  }, [gameSlice]);

  return (
    <>
      {
        <div className="HomeContainer">
          <div className="HomeInnerContainer">
            <div className="banner">
              <div className="genericTitle"> {gameSlice.pageDetails.title}</div>{" "}
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
                className="topScroll "
                alt="scroll to top"
                title="home"
                onClick={() => {
                  // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  navigate("/");
                }}
              />
              <img
                src={f4}
                className="topScroll navButton"
                alt="scroll to top"
                title="Code Review"
                onClick={() => {
                  navHandler(0);
                  //TODO add dispatch pages so it will know what to do
                }}
              />
              <img
                src={f3}
                className="topScroll navButton"
                alt="scroll to top"
                title="Content Generator"
                onClick={() => {
                  navHandler(1);
                }}
              />
              <img
                src={f2}
                className="topScroll navButton"
                alt="scroll to top"
                title="Math Compiler"
                onClick={() => {
                  navHandler(2);
                }}
              />
              <img
                src={f1}
                className="topScroll navButton"
                alt="scroll to top"
                title="Private Tutor"
                onClick={() => {
                  navHandler(3);
                }}
              />
              <img
                src={topScroll}
                className="topScroll "
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
