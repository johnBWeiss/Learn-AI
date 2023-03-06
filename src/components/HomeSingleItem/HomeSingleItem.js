import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  pageDetails } from '../../store/gameSlice'

import { useNavigate } from 'react-router';
import './HomeSingleItem.css';

const HomeSingleItem = ({ data }) => {


  const { title, thumbnail, release_date,
    paragraph, paragraph2 ,paragraph3,secondTitle, backgroundImage,
    dividerColor, navTitle } = data
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // gameSlice?.pageDetails?.backgroundImage? navigate('/') : null
    if (!backgroundImage) {
      navigate('/')
    }
  }, [])


  const popUpHandler = () => {
    // disptach(changePopUpStatus(data))
    dispatch(pageDetails({
      title, backgroundImage: thumbnail, byLine: release_date,
      secondTitle, paragraph,
      dividerColor, navTitle, paragraph2, paragraph3
    }))
    navigate(`/details/${navTitle}`)
  }

  return (
    <div className='galleryContainer vertContainerFlex'>
      <img
        // onClick={popUpHandler}
        onClick={popUpHandler}

        className='HomeSingleItemImage'
        src={thumbnail}
        alt={title}
        title={title} />
      <div
        className='vertFlex itemDetailsContainer' onClick={() => popUpHandler()}>
        <div className='itemTitleMore'>
          {title}
        </div>
        <div>
          {release_date}
        </div>
        <div>
          {/* {shortenedPublisher} */}
        </div>
      </div>
    </div>
  );
};

export default HomeSingleItem;
