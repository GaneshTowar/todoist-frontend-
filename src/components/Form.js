import React, { useState } from 'react'
import { useEffect } from 'react'
import {MdAdd} from "react-icons/md"
import axios from './AxiosConfig/axios.js';
import { addTodo,editTodo } from '../actions/index.js';
import { useDispatch,useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { formSchema } from './schema/index.js';

const initialValues ={
    input:"",
    desc:"",
    date:"",  
};

const Form = () => {

  const [username] = useState(JSON.parse(localStorage.getItem('user')))

  const [Input,setInput] = useState("")
  const [desc,setDesc] = useState("")
  const [date,setDate] = useState("")
  const editTodos = useSelector((state)=> state.edittodoReducer.editList)

  const dispatch = useDispatch()

  var day = new Date();
  var dd = day.getDate();
  var mm = day.getMonth()+1; 
  var yyyy = day.getFullYear();
  
  if(dd<10) 
  {
      dd='0'+dd;
  } 

  if(mm<10) 
  {
      mm='0'+mm;
  } 



  const {values, errors,touched, handleBlur, handleChange, handleSubmit}= useFormik({
    initialValues:initialValues,
    validationSchema: formSchema,
    onSubmit:async (value,action)=>{


    }

  })


    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    const onDesChange =(event) =>{
      setDesc(event.target.value)
    }

    const onDatechange = (event) =>{
      setDate(event.target.value)
    }

    const updateTodos = async (title, _id, des, date,username) =>{
        
        await axios.patch(`/listData/${_id}`, {                        //get inbox data
                                  title: title,
                                  des:des,
                                  date:date,
                                  username:username
                              })
                                .then((response) => {
                                  
                                  console.log(response)
                                  dispatch(editTodo([]))
                                }).catch((e)=>{
                                  console.log(e)
                                  dispatch(editTodo([]))
                                })

                                setInput("");
                                setDesc("");
                                setDate("");
                                
    } 

    useEffect(()=>{                              //from editTodos -----> from input fields
          if(editTodos){
            setInput(editTodos.title)
            setDesc(editTodos.des)
            setDate(editTodos.date)
          }else{
            setInput("")
            setDesc("")
            setDate("")
          }
    },[setInput,editTodos,setDesc,setDate])

    const onSubmitForm = async (event)=>{
      event.preventDefault();


          if(editTodos.length===0){      
              axios.post(`/addlist`,{                                   //add data api call
                        "date":date,
                        "des":desc,
                        "title":Input,
                        "username":username
                    }).then((r)=>{
                      console.log(r.data)
                      dispatch(addTodo(r.data))
                    }).catch((err) => console.log(err));

              setInput("");
              setDesc("");
              setDate("");
        }else{
              updateTodos(Input, editTodos._id ,desc ,date ,username )
        }
        
    }

  return (
    <form onSubmit={onSubmitForm} className="flex">
        <button type='submit' className=' mx-4 '>
          <MdAdd className='cursor-pointer text-red-400 hover:bg-red-500 rounded-full hover:text-white' size={22}></MdAdd>
          </button>
        <div className='flex-row'>
          <input type="text" placeholder='  Add task  ' value={Input} required onChange={onInputChange} />
          <input type="text" placeholder='  Add Des  ' value={desc} required onChange={onDesChange} />
          <input type="date" value={date} min={`${yyyy}-${mm}-${dd}`} required onChange={onDatechange}/>
        </div>
    </form>
  )
}

export default Form
 