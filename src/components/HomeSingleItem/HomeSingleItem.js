import React from 'react';
import { useDispatch } from 'react-redux';
import { changePopUpStatus, pageDetails } from '../../store/gameSlice'
import { shorten } from '../../utils/functions';
import { useNavigate } from 'react-router';
import './HomeSingleItem.css';

const HomeSingleItem = ({ data }) => {


  const { title, thumbnail, release_date, publisher, pageName } = data
  const dispatch = useDispatch()
  const navigate = useNavigate()


  // the shorten function recives texts and slices them according to dynamic values.
  let shortenedTitle = shorten(title, 19)
  let shortenedPublisher = shorten(publisher, 19)

  // the PopUpHandler function updates the state so the popup will show, along with the correct data 
  const popUpHandler = () => {
    // disptach(changePopUpStatus(data))
    dispatch(pageDetails({ title }))
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
          {shortenedTitle}
        </div>
        <div>
          {release_date}
        </div>
        <div>
          {shortenedPublisher}
        </div>
      </div>
    </div>
  );
};

export default HomeSingleItem;
