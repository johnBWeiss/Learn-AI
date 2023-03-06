import React from 'react'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom';

const Enlarged_Image = ({ location }) => {
    const [data] = useSearchParams()
    const message = location?.state && location?.state?.message;
    let src = (data.get("id"));
    let path = (data.get('path'))



    const navigate = useNavigate()
    return (
        <div style={{ backgroundImage: "url('../assets/images/back-4.jpg')", height: '100vh', width: '100vw', position: 'fixed', backgroundColor: 'rgb(0,0,0,0.45)', cursor: 'pointer', borderRadius: '20px' }} className='true-center ' onClick={() =>
            navigate(
                //     `details/${path}`
                -1
                , { state: { message: '' } })}> <img style={{ objectFit: 'contain' }} src={src} height='90%' width='90%' alt='img' /> </div >)
}
export default Enlarged_Image