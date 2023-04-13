import React from 'react'
import {BsFillBookFill} from 'react-icons/bs'
import logo from './Images/loginImage.png'
import { useNavigate } from 'react-router-dom'
import axios from './AxiosConfig/axios.js';
import { useFormik } from 'formik';
import { logInSchema } from './schema';

const initialValues ={
    email:"",
    password:""
};

const LoginForm = ()=> {


    const {values, errors,touched, handleBlur, handleChange, handleSubmit}= useFormik({
        initialValues:initialValues,
        validationSchema: logInSchema,
        onSubmit:async (value,action)=>{
            action.resetForm()
            console.log(value)

            let response =  await axios.post('/login', 
                    {"name":value.email, "password":value.password}
          ).catch(err => {console.log(err)
          return err});

       console.log(response)
        if(response.status===201){
            localStorage.setItem('token',JSON.stringify(response.data.auth))
            localStorage.setItem('user',JSON.stringify(response.data.getMens.name))
            alert("User Signed")
            navigate("/home/inbox")
        }
        else{
            alert("Wrong Credentials")
        }

        }
})
    const navigate = useNavigate()


    const onSubmitLogin = async (event) =>{
        event.preventDefault()

        
        
    }

  
    

  return (
    <div className='w-screen h-screen '>
        <div className='flex justify-center align-center mt-7 w-full h-full'>
            <div className='flex-col  w-9/12 h-5/6  gap-32'>
                <div className='flex justify-start my-4 cursor-pointer'>
                    <BsFillBookFill size={32} color={'red'}/> 
                     <h1 className='mx-3 text-2xl text-red-500 font-mono font-bold ' onClick={()=>navigate("/index")}>  todoList</h1>
                </div>
                <div className='flex  content-start h-full'>
                    <div className='flex-col w-1/2'>
                        <div className='text-3xl h-1/6 cursor-pointer'>Login</div>
                        <form className='flex-col  h-5/6' onSubmit={handleSubmit}>
                            <div className='w-full h-12'>
                                <textarea className='w-full resize-none' 
                                            name="email" 
                                            id='name' 
                                            placeholder='Email' 
                                            value={values.email} 
                                            onChange={handleChange} 
                                            onBlur={handleBlur}  
                                            />
                            </div>
                            {
                                    errors.email  && touched.email ?
                                    (<p className='font-thin text-black bg-red-200 rounded-md border-x-2'>{errors.email}</p>)
                                    : null
                                    }
                            <div className='w-full h-12'>
                                <textarea className='w-full resize-none' 
                                            name="password" 
                                            id="password" 
                                            placeholder='Password'  
                                            value={values.password} 
                                            onChange={handleChange} 
                                            onBlur={handleBlur}   />
                            </div>
                            {
                                    errors.password  && touched.password ?
                                    (<p className='font-thin text-black bg-red-200 rounded-md border-x-2'>{errors.password}</p>)
                                    : null
                                    }
                            <div className='w-full h-12 flex justify-center bg-red-500 hover:bg-red-600 cursor-pointer rounded-md' >
                                <button  className='text-2xl' type='submit'>Log in</button>
                            </div>
                            <div className='w-full h-12 '>
                                <p className='font-extralight cursor-pointer underline'>Forget Password</p>
                            </div>
                            <div className='w-full h-12 cursor-pointer'>
                                <p onClick={()=>navigate("/")}>Dont have an account? Sign up</p>
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

export default LoginForm