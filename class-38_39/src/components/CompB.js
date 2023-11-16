import React from 'react'
import HOC from './HOC'

function CompB({ style }) {
  return (
    <div style={style}>CompB</div>
  )
}

export default HOC(CompB);