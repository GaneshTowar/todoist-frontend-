
import './App.css';
import React from 'react';
import InboxApp from './components/InboxApp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegForm from './components/RegForm.js';
import LoginForm from './components/LoginForm.js'
import { useState } from 'react';
import Home from './components/Home';
import Error from './components/Error';
import TodosList from './components/TodosList';




const App = () => {
  
  const [todos,setTodos] = useState([])
  const [editTodos,setEditTodos] = useState(null)
  return (
    <>
        <Routes>
          <Route  path="/home/" element={<InboxApp 
                                                    todos ={todos}
                                                    setTodos ={setTodos}
                                                    setEditTodos={setEditTodos}
                                                    editTodos={editTodos}
                                                    />}>

                    <Route path="inbox" element={ <TodosList
                                                   
                                                    setEditTodos={setEditTodos}
                                                    type='inbox'
                                                  />}/>
                    
                    <Route path="today" element={ <TodosList
                                                   
                                                    setEditTodos={setEditTodos} 
                                                    type='today'
                                                  /> }/>
                    
                    <Route path="upcoming" element={ <TodosList
                                                    
                                                    setEditTodos={setEditTodos}
                                                    type='upcoming'
                                                  /> }/>
           </Route>
                    
          <Route exact path="/" element={<RegForm
                                          />}/>

          <Route exact path="/login" element={<LoginForm
                                               />}/>

          <Route exact path="/index" element={<Home/>}/>

          <Route  path="*" element={<Error/>}/>

        </Routes>

    </>
  );
}

export default App;
