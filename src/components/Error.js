import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    var navigate = useNavigate
  return (
    <button onClick={()=>navigate("/")}>Error 404</button>
    
  )
}

export default Error