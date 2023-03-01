import React from 'react'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom';

const Enlarged_Image = ({ location }) => {
    const [data] = useSearchParams()
    const message = location?.state && location?.state?.message;
    let src = (data.get("id"));
    let path=(data.get('path'))



    const navigate = useNavigate()
    return (
        <div style={{ height: '100vh', width: '100vw', position: 'fixed', backgroundColor: 'black' }} className='true-center' onClick={() =>
            navigate(
            //     `details/${path}`
            -1
                , { state: { message: 'dumb' } })}> <img style={{ objectFit: 'contain' }} src={src} height='100%' width='100%' alt='img' /> </div >)
}
export default Enlarged_Image