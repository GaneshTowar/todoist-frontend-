import React from 'react'
import leftimage from './Images/leftimage.jpg'
import illustration from './Images/illustration.avif'
import rightimage from './Images/rightimage.webp'
import Navigation from './Navigation.js'
import {AiOutlineAmazon,AiFillAndroid,AiFillCamera,AiFillCloud} from 'react-icons/ai'
import {BsGoogle} from 'react-icons/bs'
import {FaFacebookF ,FaFacebookMessenger} from 'react-icons/fa'
import {GiHotSurface ,GiCompanionCube} from 'react-icons/gi'
import { Link } from "react-router-dom";



const home=()=> {

 

  return (
    <div>
         <Navigation></Navigation> 
         <section className=' w-screen pt-28 '>
            <div className='flex flex-col text-center gap-4 mt-12'>
                <div className='text-5xl font-bold'>Organize your <br/>work and life, finally.</div>
                <div className='text-2xl'>Become focused, organized, and calm with <br/>Todoist. The world’s #1 task manager and to-do<br/> list app.</div>
                <Link to="/home/inbox"><span className='bg-red-500 text-white font-bold rounded-lg w-1/6 self-center p-2 cursor-pointer hover:bg-red-400'>Start for free</span>
           </Link> </div>
            <div className='grid grid-cols-5 mt-6 '>
                <div className='col-span-1 h-full'><img className='h-full w-full' src={leftimage} alt='centre img'/></div>
                <div className='col-span-3'><img src={illustration} alt='left img'/></div>
                <div className='col-span-1 h-full'><img className='h-full w-full' src={rightimage} alt='right img'/></div>
            </div>
          </section>  
          <section className=' flex h-1/4 bg-orange-100 justify-center py-9'>
                <div className='flex gap-12'>
                    <div className='flex flex-col gap-3'>
                        <div>300,000+ REVIEWS</div>
                        <div>★★★★★</div>
                        <div>App Store and Google Play</div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-5 '><AiOutlineAmazon color='grey' size={32}/><AiFillCamera color='grey' size={26}/><AiFillCloud color='grey' size={26}/></div>
                        <div className='flex gap-5 '><BsGoogle color='grey' size={26}/> <GiCompanionCube color='grey' size={26}/> <AiFillAndroid color='grey' size={26}/></div>
                        <div className='flex gap-5 '><FaFacebookF color='grey' size={26}/><FaFacebookMessenger color='grey' size={26}/><GiHotSurface color='grey' size={26}/></div>
                    </div>
                </div>
          </section>  
        
    </div>
  )
}

export default home