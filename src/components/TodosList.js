import React from 'react'
import { useEffect } from 'react'
import {VscEdit} from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'
import axios from './AxiosConfig/axios.js';
import useStore from '../store.js';


const TodosList = ({type})=> {

    
    const list = useStore((state) => state.list)
    
    const editList = useStore((state)=> state.editList)
    const editTodos =  useStore((state)=> state.editTodos)  // method in store to edit the edit 
    const getTodo = useStore((state)=> state.getTodo)
    const deleteTodo = useStore((state)=> state.deleteTodo)


    const handelDelete =async ({_id}) =>{     

        axios.delete(`/listData/${_id}`).then((response)=>{
            console.log(response)
            deleteTodo(response.data)
        })
        

    }

    const dateChangeHandler = (event) => {
        event.preventDefault()
        
    }
    const editHandler =(todo) =>{                                       
        editTodos(todo)
    }

    const Navigate = useNavigate()                    // if user is not loggedin navigate to home page

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('user'))===null){
            Navigate("/")
        }
    },[Navigate])

    useEffect(()=>{
            if(type==='inbox'){

                axios.get(`/listData/${JSON.parse(localStorage.getItem('user'))}`).then((response) =>{    // Get INBOX data
                    getTodo(response.data)
                    console.log(response.data)
                  }).catch((err) => console.log(err));

            }if(type==='upcoming'){

                axios.get(`/upcoming/${JSON.parse(localStorage.getItem('user'))}`).then((response) =>{   // Get upcoming data
                    getTodo(response.data)
                    console.log(response.data)
              }).catch((err)=> console.log(err))                       
        
            }if(type==='today'){

                axios.get(`/todays/${JSON.parse(localStorage.getItem('user'))}`).then((response) =>{   // gET todays DATA
                        getTodo(response.data)
                        console.log(response.data)

                }).catch((err)=> console.log(err))

            }
    },[type,getTodo,editList])
    
  return (
    <><ul className='flex-row justify-evenly'>
          {list.map((todo) => {
            if(todo.username){
                return <li key={todo._id} className="border-b divide-slate-200 my-5 text-sm flex gap-3 justify-between cursor-pointer">
                <div className='flex gap-3 '>
                    <div>
                        <input className='cursor-pointer' type="radio" onClick={() => { handelDelete(todo) } }></input>
                    </div>
                    <div >
                        <div className='flex-col gap-5 w-fit h-fit'>
                            <input className='focus:outline-none cursor-pointer'
                                type='text'
                                value={todo.title}
                                onChange={(event) => { event.preventDefault() } } />
                        </div>


                        <div>
                            <textarea className='font-light  cursor-pointer resize-none  focus:outline-none'
                                type='text'
                                value={todo.des}
                                onChange={(event) => { event.preventDefault() } } />
                        </div>




                        <div className='flex font-light'>


                            <input type="date" id="start" name="trip-start" onClick={dateChangeHandler}
                                onChange={dateChangeHandler}
                                value={todo.date}
                                min="2023-01-01" max="2050-12-01" />

                        </div>



                    </div>
                </div>
                <div className='flex'>
                    <div></div>
                    <VscEdit className='text-right align-bottom' onClick={()=>editHandler(todo)}></VscEdit>
                </div>

            </li>

            }
            else{
               return null
            }
              


          })}

      </ul>

      {/* <Form 
          setEditTodos={setEditTodos}
          type={type}
            />  */}
        </>
  )
}

export default TodosList