import React from 'react'

function Button({ clickAddEventHandler, children }) {
  return (<button onClick={clickAddEventHandler}>{children}</button>
  )
}

export default Button