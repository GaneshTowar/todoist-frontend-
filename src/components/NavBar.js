
import React, { useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import {SlHome} from "react-icons/sl"
import {CiSearch} from 'react-icons/ci'
import {AiOutlineStock} from 'react-icons/ai'
import {SlQuestion} from 'react-icons/sl'
import {VscBell} from 'react-icons/vsc'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {VscAdd} from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'
import ProfileSec from './ProfileSec'
import Searchbox from './Searchbox'
import axios from './AxiosConfig/axios'


const NavBar =({toggle,setToggle,toggleAddpop,setToggleAddpop}) => {
    const [toggleProfile,setToggleProfile] =useState(false)
    const [theme,setTheme] = useState(true)
    const [searchbox,setSearchbox] =useState([])
    const [username,setUsername] = useState(JSON.parse(localStorage.getItem('user')))


    const handelToggle=()=>{
        setToggle(!toggle)
        console.log(toggle)

    }
    const SearchboxChange = async (event) =>{

        if(event.target.value===''){
            setSearchbox([])
        }else{
            const searchResult = await axios.post(`/search`,{
                username:username,
                searchName:event.target.value
            })
            
            //const searchResult = todos.filter(todo => todo.title.toLowerCase().includes(event.target.value.toLowerCase()))
            setSearchbox(searchResult)
            console.log(searchbox)
        }

        

    }
    const Navigate = useNavigate()
  return (
    <>
    <div className={`${theme ? "bg-red-500 text-black":"bg-black text-white"} w-screen relative`}>
    <nav className={`flex py-2 mx-6 justify-between ${theme ? "bg-red-500 text-black":"bg-black text-white"}`}>
        <ul className='flex gap-3' >
            <AiOutlineMenu onClick={handelToggle} className= {`my-1 cursor-pointer ${toggle?"bg-red-400":""} hover:bg-red-400 rounded-md`} size={21}></AiOutlineMenu>
            <SlHome onClick={()=>Navigate("/index")} className='my-1 cursor-pointer hover:bg-red-400 rounded-md' size={21}></SlHome>
            <CiSearch className='my-1 cursor-pointer hover:bg-red-400 rounded-md' size={21}></CiSearch>
            <li>
            <div className="relative"><input placeholder=' Search' className={`
rounded-md ${theme ? "placeholder-white bg-red-400 cursor-text hover:bg-slate-50 text-black focus-within:bg-white":"bg-black text-white"} `} onChange={SearchboxChange}>
                </input>
                <Searchbox 
                searchbox={searchbox}
                ></Searchbox>
      </div>
            </li>
        </ul>
        <ul className='flex gap-5 cursor-pointer  '>   
            <VscAdd onClick={()=>{setToggleAddpop(!toggleAddpop)}} className=' hover:bg-red-400  cursor-pointer rounded-md' size={21} color={'white'}></VscAdd>
            <AiOutlineStock className='my-1 cursor-pointer hover:bg-red-400 rounded-md' size={21}></AiOutlineStock>
            <SlQuestion className='my-1  cursor-pointer hover:bg-red-400 rounded-md' size={21}></SlQuestion>
            <VscBell className='my-1 cursor-pointer hover:bg-red-400 rounded-md' size={21}></VscBell>
            <div className='relative'>
                <HiOutlineUserCircle onClick={()=>{setToggleProfile(!toggleProfile)}} className='my-1  cursor-pointer hover:bg-red-400 rounded-md ' size={21}></HiOutlineUserCircle>
            </div>
            
        </ul>
    </nav>
   
    
    
    </div>
    <span className={`sticky float-right drop-shadow-2xl min-w-64 rounded-3xl bg-slate-100 ${toggleProfile?"":"hidden"}`}>
        <ProfileSec username={username} 
        setUsername={setUsername}
        theme={theme}
        setTheme={setTheme} ></ProfileSec>
    </span>
    </>
  )
}

export default NavBar