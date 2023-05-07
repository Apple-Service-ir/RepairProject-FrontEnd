import React from 'react'
import { useRef } from 'react'

export default function FileInput(props) {
  const inputRef = useRef(null)

  function clickHandler() {
    inputRef.current.click()
  }

  return (
    <div className={`${props.width} h-16 relative`}>
      <input className='hidden' type="file" ref={inputRef} />
      <div className="bg-slate-200 border-2 border-slate-300
        w-full h-full flex items-center absolute top-0 left-0 p-3 pl-16 rounded-xl
      	cursor-pointer hover:border-slate-400" onClick={clickHandler}>
        <span className='text-blue-500 text-sm sm:text-base'>{props.name}</span>
      </div>
      <div className='w-10 h-10 flex justify-center items-center absolute left-3 top-1/2 -translate-y-1/2'>
        {props.svg}
      </div>
    </div>
  )
}