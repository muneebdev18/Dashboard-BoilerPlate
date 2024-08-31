import React, { useEffect } from 'react'
import DotLoader from '../../components/dotLoader/DotLoader'
import {useNavigate} from 'react-router-dom'
import Logo from '../../assets/images/logos/Group 1597883045.png'
const Splash = () => {
    const navigate = useNavigate() // Redirect to the desired page
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/dashboard')
        },3000)
    },[])
  return (
    <div className='h-screen flex flex-col gap-9 justify-center items-center w-full bg-[#150e37]'>
        <img width={150} height={150} src={Logo}/>  
        {/* <p className='text-[54px] font-semibold'>Logo</p> */}
        <DotLoader/>
    </div>
  )
}

export default Splash