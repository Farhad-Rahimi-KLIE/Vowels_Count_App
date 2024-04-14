import React, { useEffect, useState } from 'react'
import './State.css'
const State = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title = `Chats( ${count} )`
    })
  return (
    <>
      <div className="center_div">
        <p>{count}</p>
        <div class="button2" onClick={()=> setCount(count+1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  )
}

export default State
