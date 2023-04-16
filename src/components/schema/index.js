import * as Yup from 'yup';

 export const signUpSchema = Yup.object({
    email: Yup.string().email().required("Please enter email"),
    password : Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref('password'),null], "Password must match"),
 });
 
 export const logInSchema = Yup.object({
    email: Yup.string().email().required("Please enter email"),
    password : Yup.string().min(6).required("Please enter your password"),
 })

 export const formSchema = Yup.object({
   
      title: Yup.string().required("please enter title"),
      des: Yup.string().required("please enter des"),
      date: Yup.date().required("please enter date")

 })