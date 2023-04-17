import React, { useState } from 'react'
import { useEffect } from 'react'
import {MdAdd} from "react-icons/md"
import axios from './AxiosConfig/axios.js';
import { addTodo,editTodo } from '../actions/index.js';
import { useDispatch,useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { formSchema } from './schema/index.js';
import { date } from 'yup';

const initialValues ={
    input:"",
    desc:"",
    date:"",  
};

const Form = () => {

  const [username] = useState(JSON.parse(localStorage.getItem('user')))

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



  const {values, handleBlur, handleChange, handleSubmit,resetForm,setFieldValue}= useFormik({
    initialValues:initialValues,
    validationSchema: formSchema,
    onSubmit: (value,action)=>{

      action.resetForm()

      if(editTodos.length===0){      
        axios.post(`/addlist`,{                                   //add data api call
                        "date":value.date,
                        "des":value.desc,
                        "title":value.input,
                        "username":username
                      }).then((r)=>{
                        console.log(r.data)
                        dispatch(addTodo(r.data))
                      }).catch((err) => console.log(err));
                     
                    }else{

                      axios.patch(`/listData/${editTodos._id}`, {                        //get inbox data
                        title: value.input,
                        des:value.desc,
                        date:value.date,
                        username:username
                    })
                      .then((response) => {
                        
                        console.log(response)
                        dispatch(editTodo([]))
                      }).catch((e)=>{
                        console.log(e)
                        dispatch(editTodo([]))
                      })


                    }

    }

  })


  useEffect(()=>{                              //from editTodos -----> from input fields
    if(editTodos){
         setFieldValue("input",editTodos.title,true)
         setFieldValue("desc",editTodos.des,true)
         setFieldValue("date",editTodos.date,date)
                   }else{
                       resetForm()
                         }
                   },[resetForm,setFieldValue,editTodos])




                    
                    

    

  return (
    <form onSubmit={handleSubmit} className="flex">

        <button type="button" onClick={handleSubmit} className=' mx-4 '>
                  <MdAdd className='cursor-pointer text-red-400 hover:bg-red-500 rounded-full hover:text-white' size={22}></MdAdd>
        </button>
        <div className='flex-row'>
          <input type="text" placeholder='  Add task  'name='input' value={values.input} required onChange={handleChange} onBlur={handleBlur} />
          <input type="text" placeholder='  Add Des  ' name='desc' value={values.desc} required onChange={handleChange} onBlur={handleBlur} />
          <input type="date" value={values.date} name='date' min={`${yyyy}-${mm}-${dd}`} required onChange={handleChange} onBlur={handleBlur}/>
        </div>
      
    </form>
  )
}

export default Form
 