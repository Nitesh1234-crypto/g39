import React from 'react'

const Child = (props) => {
    return(
        <div>
          <h4>Child</h4>
          <p>Grand child name is {props.gname}</p>
          <p>Grand Child age is {props.gage}</p>
          <h1>Paise pade hai {props.paisekiinfo}</h1>
        </div>
      )
}


export default Child

