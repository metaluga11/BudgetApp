import React from 'react'
import Photocard from './Photocard';


function Ourteam(props) {
    console.log(props)
  return (
    <div>
    {props.data.ourTeamData.map((el) => <Photocard name={el.name} />)}
    </div>
  )
}

export default Ourteam