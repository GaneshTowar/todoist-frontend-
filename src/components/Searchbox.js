import React from 'react'


const Searchbox = ({searchbox}) => {
  return (
    <div className="absolute drop-shadow-sm w-full my-1 rounded-lg bg-white shadow-lg z-40">
        {searchbox.map((search) => {
                return <div className="hover:bg-slate-300 rounded-lg p-1">{`${search.title}`}</div>
             })}
        
    </div>
  )
}

export default Searchbox