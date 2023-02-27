import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import genericVector from "../../assets/images/back-2.jpg";
import a from "../../assets/images/back-3.jpg";
import b from "../../assets/images/back-4.jpg";
import c from "../../assets/images/back-5.jpg";
import "./Carousel.css";
import { changePopUpStatus } from "../../store/gameSlice";
import { useDispatch } from "react-redux";

const CarouselLib = () => {
      const dispatch = useDispatch();

  const carouselItems = [
    {
      src: "../../assets/images/back-1.jpg",
      backgroundColor: "",
      text: "תשלום חשבונית",
    },
    {
      src: "../../assets/images/back-2.jpg",
      backgroundColor: "",
      text: "תשלום חשבונית",
    },
    { src: genericVector, backgroundColor: "", text: " חשבונית" },
    { src: a, backgroundColor: "", text: "תשלום חשבונית" },
    { src: b, backgroundColor: "", text: "תשלום ת" },
    { src: genericVector, backgroundColor: "red", text: "תשלום חשבונית" },
    { src: c, backgroundColor: "green", text: "תשלום חשבונית" },
    { src: a, backgroundColor: "red", text: "תשלום חשבונית" },
    { src: genericVector, backgroundColor: "green", text: "תשלום חשבונית" },
    { src: b, backgroundColor: "blue", text: "תשלום חשבונית" },
  ];
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
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        //   ssr={true} // means to render carousel on server-side.
        infinite={true}
        //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[""]}
        //   deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {carouselItems?.map((v, i) => (
          <div
            key={v.src}
            // className="containerItem"
            // style={{ ...jump }}
          >
            <img
              src={v.src}
              alt="logo"
              height="500px"
              width={"100%"}
              style={{ objectFit: "cover",borderRadius:'30px',cursor:'pointer' }}
              onClick={  ''
                //   dispatch(changePopUpStatus({thumbnail:v.src}))
}
            />
            {/* <div>{v.text}</div> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default CarouselLib;
