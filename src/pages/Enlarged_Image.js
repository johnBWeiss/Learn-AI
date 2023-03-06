import React,{useEffect} from 'react'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom';
import X from "../assets/x.png"

const Enlarged_Image = ({ location }) => {
    const [data] = useSearchParams()
    let src = (data.get("id"));

  
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
     
    }, [])

    const navigate = useNavigate()
    return (
        <div style={{ backgroundImage: "url('../assets/images/back-4.jpg')",marginTop:'', height: '90vh', width: '100vw', position: 'fixed', backgroundColor: 'rgb(0,0,0,0.45)', cursor: 'pointer', borderRadius: '20px', flexDirection: 'column' }} className='true-center ' > <img style={{ objectFit: 'contain' }} src={src} height='90%' width='90%' alt='img' />     <img
            src={X}
            className="topScroll "
            style={{transform:'translateY(0px)'}}
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