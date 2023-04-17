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
   
      title: Yup.string(),
      des: Yup.string(),
      date: Yup.date()

 })