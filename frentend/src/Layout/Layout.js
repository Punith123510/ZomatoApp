import React from 'react'
import Header from './Header'

function Loyout(props) {
  
    return (
      <div>
        <Header />
        {props.children}
      </div>
    )
  
}

export default Loyout
