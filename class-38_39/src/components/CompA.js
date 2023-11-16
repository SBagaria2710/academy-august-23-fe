import React from 'react'
import HOC from './HOC'

function CompA({ style }) {
  return (
    <div style={style}>CompA</div>
  )
}

export default HOC(CompA);