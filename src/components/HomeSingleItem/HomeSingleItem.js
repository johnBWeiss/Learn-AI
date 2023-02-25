import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changePopUpStatus, pageDetails } from '../../store/gameSlice'
import { shorten } from '../../utils/functions';
import { useNavigate } from 'react-router';
import './HomeSingleItem.css';

const HomeSingleItem = ({ data }) => {


  const { title, thumbnail, release_date, publisher, pageName } = data
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // useEffect(() => {
  //   dispatch(pageDetails({
  //     title, backgroundImage: thumbnail, byLine: release_date,
  //     secondTitle: '', paragraph: '',
  //     dividercolor: ''
  //   }))
  //   return () => {
  //     second
  //   }
  // }, [third])



  const popUpHandler = () => {
    // disptach(changePopUpStatus(data))
    dispatch(pageDetails({
      title, backgroundImage: thumbnail, byLine: release_date,
      secondTitle: 'testiing', paragraph: 'this is grat',
      dividercolor: 'red'
    }))
    navigate(`/details`)
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
