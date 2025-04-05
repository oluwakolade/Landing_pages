import React from 'react'

const BottomCard = (props) => {
  return (
    <div className= {`btm-card ${props.className}`}>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
    </div>
  )
}

export default BottomCard