import React from 'react'
import './solution.css'
const Solution = (props) => {
  return (
    <div className='kpsc__solution section__margin'>
        <h1>{props.title}</h1>
        {props.enableSeperator && (
          <div className='kpsc__solution_seperator'/>
        )}
        {props.children}
    </div>
  )
}

export default Solution