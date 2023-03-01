import Carousel from "react-multi-carousel";
import { createSearchParams } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import genericVector from "../../assets/images/back-2.jpg";
import a from "../../assets/images/back-3.jpg";
import b from "../../assets/images/back-4.jpg";
import c from "../../assets/images/back-5.jpg";
import "./Carousel.css";

import { useNavigate } from "react-router";

const CarouselLib = ({ imgArray }) => {
  console.log(imgArray);
  const navigate = useNavigate();
  const handleClick = (src, path) => {
    navigate({
      pathname: "/image-details",
      search: createSearchParams({ id: src, path }).toString(),
    });
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 6000, min: 1024 },
      items: 1,
      //   slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      //   slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      //   slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="CarouselLibContainer">
      {imgArray && (
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
          {imgArray?.map((v, i) => (
            <div
              key={v.src}
              // className="containerItem"
              // style={{ ...jump }}
            >
              <img
                src={v.src}
                alt="logo"
                // height={imgSize}
                //   width={"75vw"}
                className="carouselImage"
                // onClick={() => {
                //   navigate("/", {
                //     state: {
                //       data: v.src,
                //     },
                //   });
                // }}
                onClick={() => {
                  handleClick(v.src, v.path);
                }}
                //   style={{ width:'65vw',objectFit: "cover",borderRadius:'30px',cursor:'pointer' }}
              />
              {/* <div>{v.text}</div> */}
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};
export default CarouselLib;
