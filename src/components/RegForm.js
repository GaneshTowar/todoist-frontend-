import React from 'react'
import {BsFillBookFill} from 'react-icons/bs'
import logo from './Images/loginImage.png'
import axios from './AxiosConfig/axios.js';
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import { signUpSchema } from './schema';

const initialValues ={
    email:"",
    password:"",
    confirm_password:""
};
const RegForm = ()=> {

   
const navigate = useNavigate()

const {values, errors,touched, handleBlur, handleChange, handleSubmit}= useFormik({
        initialValues:initialValues,
        validationSchema: signUpSchema,
        onSubmit:async (value,action)=>{
            action.resetForm()
            let resp =  await axios.post('/register',{
                "name":value.email, "password":value.password
                }
          ).catch(err => {
            console.log(err)
            return err            
        })

        console.log(resp)
        if(resp.status === 201){
            localStorage.setItem('user',JSON.stringify(resp.data.username))
            localStorage.setItem('token',JSON.stringify(resp.data.auth))
            alert("User signed up")
            navigate("/home/inbox")
        }
        else{
            alert("User already exist")

        }

        }
})


  return (
    <div className='w-screen h-screen '>
        <div className='flex justify-center align-center mt-7 w-full h-full'>
            <div className='flex-col  w-9/12 h-5/6  gap-32'>
                <div className='flex justify-start my-4 cursor-pointer'>
                    <BsFillBookFill size={32} color={'red'}/> 
                     <h1 className='mx-3 text-2xl text-red-500 font-mono font-bold' onClick={()=>navigate("/index")}>  todoList</h1>
                </div>
                <div className='flex  content-start h-full'>
                    <div onSubmit={handleSubmit} className='flex-col w-1/2'>
                        <div className='text-3xl h-1/6 cursor-pointer'>Register</div>
                                <form className='flex-col  h-5/6'>
                                    <div className='w-full h-12'>
                                        <textarea className='w-full resize-none' 
                                        name="email" 
                                        placeholder='Email' 
                                        value={values.email} 
                                        onChange={handleChange} 
                                        onBlur={handleBlur} 
                                        />
                                    </div>
                                    {
                                    errors.email  && touched.email ?
                                    (<p className='font-thin text-black bg-red-200 rounded-md border-x-2 '>{errors.email}</p>)
                                    : null
                                    }
                                    <div className='w-full h-12'>
                                        <textarea className='w-full resize-none' 
                                        name="password" 
                                        placeholder='Password'  
                                        value={values.password} 
                                        onChange={handleChange} 
                                        onBlur={handleBlur} 
                                        />
                                    </div>
                                    {
                                    errors.password  && touched.password ?
                                    (<p className='font-thin text-black bg-red-200 rounded-md border-x-2'>{errors.password}</p>)
                                    : null
                                    }
                                    <div className='w-full h-12'>
                                        <textarea className='w-full resize-none' 
                                        name="confirm_password" 
                                        placeholder='confirm Password'  
                                        value={values.confirm_password} 
                                        onChange={handleChange} 
                                        onBlur={handleBlur}  
                                        />
                                    </div>
                                    {
                                    errors.confirm_password  && touched.confirm_password ?
                                    (<p className='font-thin text-black bg-red-200 rounded-md border-x-2'>{errors.confirm_password}</p>)
                                    : null
                                    }
                                    <div className='w-full h-12 flex justify-center bg-red-500 hover:bg-red-600 cursor-pointer rounded-md' >
                                        <button type='submit' className='text-2xl '>Register</button>
                                    </div>
                                    <div className='w-full h-12 '>
                                        <p className='font-extralight cursor-pointer underline'>Forget Password</p>
                                    </div>
                                    <div className='w-full h-12 cursor-pointer'>
                                        <p onClick={()=>{
                                            
                                            navigate("/login")
                                            }}>Do you have an account? Sign in</p>
                                    </div>
                                </form>
                    </div>

                    <div className='w-1/2'>
                        <img className="" src={logo} alt={"Carlie Anglemire"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegForm