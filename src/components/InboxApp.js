import React, {  useState } from 'react'
import Header from './Header.js';
import Form from './Form.js';
import NavBar from './NavBar.js'
import SideBar from './SideBar';
import AddPop from './AddPop.js';
import { Outlet } from 'react-router-dom';

function InboxApp({todos,setTodos,todaylen,upcominglen,inboxlen}) {

    const [headername,setHeadername] = useState("Inbox")
    const [toggleAddpop,setToggleAddpop] = useState(false)
    const [toggle,setToggle] = useState(false)

  return (
    <div className='overflow-hidden'>
      
      
      <NavBar className="sm:hidden md:hidden "
        toggle ={toggle}
        setToggle={setToggle}
        toggleAddpop={toggleAddpop}
        setToggleAddpop={setToggleAddpop}
        
        />
    <div className={`flex ${toggle?"justify-between":"justify-evenly"}  h-screen overflow-y-hidden`}>
      <div className= {`w-auto sticky ${toggle?"bg-slate-50":"hidden"}  drop-shadow-2xl`} >
          
          <SideBar
            toggle ={toggle}
            setToggle={setToggle}
            setHeadername={setHeadername}
            todaylen={todaylen}
            upcominglen={upcominglen}
            inboxlen={inboxlen}
            />
            
      </div>
     
    <div  className='flex-col text-left w-1/2'>
        <Header headername={headername}
                />

        <Outlet/>
        <Form 
            /> 
        
    </div>
    <div>
          <AddPop
          todos={todos}
          setTodos={setTodos}
          toggleAddpop={toggleAddpop}
          setToggleAddpop={setToggleAddpop}/>
    </div>
    </div>
    
    
    </div>
  )
}

export default InboxApp