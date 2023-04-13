
import {HiOutlineUserCircle} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'
import {MdOutlineColorLens} from 'react-icons/md'
import {IoIosLogOut} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'



const ProfileSec = ({username,setUsername,theme,setTheme})=> {
  const navigate = useNavigate()
  const logoutUser =()=>{
    console.log("logout")
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      setUsername(null)
      navigate("/index")

  }


  return (
    <>
        <div className='flex gap-6 p-4 border-b-2'>
          <div className='cursor-pointer'><HiOutlineUserCircle size={46} /></div>
          <div>
            <div className='cursor-pointer'>{username}</div>
            <div className='cursor-pointer'>{username}@gmail.com</div>
          </div>

        </div>
        <div className='p-4 flex flex-col gap-4 cursor-pointer'>
              <div className='flex gap-1 font-light'> <FiSettings/> Settings</div>
              <div className={`flex gap-1 font-light`}onClick={()=>setTheme(!theme)}> <MdOutlineColorLens /> Theme</div>
              <div className='flex gap-1 font-light rounded-2xl'> <IoIosLogOut/> <p  onClick={logoutUser}>Log Out</p> </div>
        </div>
    </>
  )
}

export default ProfileSec