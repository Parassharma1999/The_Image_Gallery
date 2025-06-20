import React from 'react'

const NavScroller = () => {
  
    const data=[
        {name:"apple"},
        {name:"orange"},
        {name:"banana"},
        {name:"grape"},
        {name:"fruit"},
        {name:"kela"},
        {name:"olx"},
        {name:"google"},
        {name:"zoom"},
        {name:"glitch"},
        {name:"apple"},
        {name:"orange"},
        {name:"banana"},
        {name:"grape"},
        {name:"fruit"},
        {name:"kela"},
        {name:"olx"},
        {name:"google"},
        {name:"zoom"},
        {name:"glitch"},
    ]

  return (
    <div className='inline-flex flex-nowrap -z-10 p-2' >
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll overflow-x-hidden">
      {data.map((i)=>{
          return(
              <li className='font-semibold'>{i.name}</li>
              )
            })}
    </ul>
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll overflow-x-hidden">
      {data.map((i)=>{
          return(
              <li className='font-semibold'>{i.name}</li>
              )
            })}
    </ul>
    </div>
  )
}

export default NavScroller