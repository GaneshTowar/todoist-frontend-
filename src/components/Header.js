import React from 'react'

function Header({headername}) {
  return (
    <h1 className="text-2xl font-bold my-11  ">{`${headername}`}</h1>
  )
}

export default Header