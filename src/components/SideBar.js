import React from 'react'
import {AiOutlineInbox} from "react-icons/ai"
import {MdToday} from "react-icons/md"
import {MdOutlineUpcoming} from "react-icons/md"
import {ImFilter} from "react-icons/im"
import {GoPrimitiveDot} from "react-icons/go"
import { useNavigate } from 'react-router-dom'

const SideBar =({toggle,setToggle, setHeadername,todaylen,upcominglen,inboxlen})=> {
  

  const Navigate = useNavigate()
  return (
    <div className='mx-4'>
    <span className={`${toggle ? "sticky":"hidden"} duration-500 flex-col gap-7 none bg-slate-50  `}>
    <span className=' mx-4 my-4 text-left'>
        <span className='flex flex-col gap-3 my-5 '>
          <span className='flex justify-between cursor-pointer gap-6 rounded-2xl hover:bg-slate-200'>
            <span className='flex gap-2'>
                      <AiOutlineInbox size={22} color={"blue"}/>
                      <span onClick={()=>{
                        setHeadername("Inbox")
                        Navigate("/home/inbox")}}>Inbox</span>
            </span>
            <span>
                  {inboxlen}
            </span> 
          </span>
          <span className='flex justify-between cursor-pointer gap-6 rounded-2xl hover:bg-slate-200'>
            <span className='flex gap-2'>
                <MdToday size={22} color={"green"}></MdToday>
                <span onClick={()=>{
                  setHeadername("Today")
                  Navigate("/home/today")}}>Today</span>
            </span>
              <span>{todaylen}</span>
            </span>
            
          <span className='flex justify-between cursor-pointer gap-6 rounded-2xl hover:bg-slate-200'>
              <span className='flex gap-2'>
                    <MdOutlineUpcoming size={22} color={"purple"}></MdOutlineUpcoming>
                    <span onClick={()=>{
                       setHeadername("Upcoming")
                      Navigate("/home/upcoming")}}>Upcoming</span>
              </span>
              <span>{upcominglen}</span>
            </span>

          <span className='flex justify-between gap-6 cursor-pointer rounded-2xl hover:bg-slate-200' >
            <span className='flex gap-2'>
                <ImFilter color={"orange"}></ImFilter>
                <span>Filters & Labels</span> 
            </span>
             
              <span>1</span>
            </span>
         </span>
        <span className='flex flex-col gap-3 my-7'>
            <span> <b>Projects</b> </span>
            <span className='flex justify-between cursor-pointer gap-6 rounded-2xl hover:bg-slate-200'> 
              <span className='flex gap-2'>
                  <GoPrimitiveDot></GoPrimitiveDot>
                  <span>Personal</span>
              </span>
              <span>1</span>
            </span>
            <span className='flex justify-between cursor-pointer gap-6 rounded-2xl hover:bg-slate-200'> 
            <span className='flex gap-2'>
                  <GoPrimitiveDot></GoPrimitiveDot>
                  <span>Ganesh Towar</span>
              </span>
              <span>1</span>
          </span>
         </span>
    </span>
   
    </span>
    </div>
  )
}

export default SideBar