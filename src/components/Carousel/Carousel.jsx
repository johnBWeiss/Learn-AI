import Carousel from "react-multi-carousel";
import { createSearchParams } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import "./Carousel.css";

import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const CarouselLib = ({ imgArray }) => {
  const navigate = useNavigate();
  const handleClick = (src, path) => {
    navigate({
      pathname: "/image-details",
      search: createSearchParams({ id: src, path }).toString(),
    });
  };

  const [shuffledArray, setShuffledArray] = useState(imgArray);

  useEffect(() => {
    let shuffled = shuffleArray(imgArray);
    setShuffledArray(shuffled);
  }, [imgArray]);

  const responsive = {
    desktop: {
      breakpoint: { max: 6000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="CarouselLibContainer">
      {shuffledArray && (
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          //   ssr={true} // means to render carousel on server-side.
          infinite={true}
          //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
          // autoPlaySpeed={1000}
          partialVisible={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[""]}
          //   deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {shuffledArray?.map((v, i) => (
            <div key={v.src}>
              <img
                src={v.src}
                alt="logo"
                className="carouselImage"
                onClick={() => {
                  handleClick(v.src, v.path);
                }}
              />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};
export default CarouselLib;
