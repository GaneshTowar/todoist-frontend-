import React from 'react'
import { BsFillBookFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


function Navigation() {
    var navi = useNavigate()
  return (
    <nav className='flex justify-between py-4 fixed bg-white w-full'>
                <div className='flex mx-12 gap-3'>
                <BsFillBookFill size={32} color={'red'}/> 
                     <h1 className='mx-3 text-2xl text-red-500 font-mono font-bold cursor-pointer'>  todoList</h1>
                </div>
                <div className='flex mx-12 gap-6 cursor-pointer'>
                    <div className='hover:bg-slate-200 rounded-md'>Feature</div>
                    <div className='hover:bg-slate-200 rounded-md'>Templates</div>
                    <div className='hover:bg-slate-200 rounded-md'>For Teams</div>
                    <div className='hover:bg-slate-200 rounded-md'>Resources</div>
                    <div className='hover:bg-slate-200 rounded-md'>Pricing</div>
                    <div className='hover:bg-slate-200 rounded-md border-l-2 p-2' onClick={()=>navi("/")}>Log in</div>
                    <div className='bg-red-500 text-white font-bold rounded-lg p-2 hover:bg-red-600' onClick={()=>navi("/")}>Start for free</div>
                </div>
            </nav>
  )
}

export default Navigation