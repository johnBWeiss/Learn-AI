import React from 'react'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom';
import X from "../assets/x.png"

const Enlarged_Image = ({ location }) => {
    const [data] = useSearchParams()
    let src = (data.get("id"));



    const navigate = useNavigate()
    return (
        <div style={{ backgroundImage: "url('../assets/images/back-4.jpg')", height: '100vh', width: '100vw', position: 'fixed', backgroundColor: 'rgb(0,0,0,0.45)', cursor: 'pointer', borderRadius: '20px', flexDirection: 'column' }} className='true-center ' > <img style={{ objectFit: 'contain' }} src={src} height='90%' width='90%' alt='img' />     <img
            src={X}
            className="topScroll "
            style={{transform:'translateY(-30px)'}}
            alt="scroll to top"
            title="back"
            onClick={() =>
                navigate(
                    //     `details/${path}`
                    -1
                    , { state: { message: '' } })}
        /></div >



    )
}
export default Enlarged_Image