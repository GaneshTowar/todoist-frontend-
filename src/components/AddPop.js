import React, { useState } from 'react'
import Form from './Form'


function AddPop({todos,setTodos,toggleAddpop,setToggleAddpop}) {
  const [username] = useState(JSON.parse(localStorage.getItem('user')))
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm ${toggleAddpop?"flex":"hidden"} justify-center items-center `}>
        <div className='bg-white h-32 flex flex-col gap-3 items-center justify-center rounded-md p-4'>
                <Form 
                todos={todos}
                setTodos={setTodos}
                username={username}
                    />
                    <div onClick={()=>{setToggleAddpop(!toggleAddpop)}} className='bg-red-400 rounded-md shadow-md p-1 cursor-pointer'>Close</div>
        </div>
        
     
    </div>
  )
}

export default AddPop