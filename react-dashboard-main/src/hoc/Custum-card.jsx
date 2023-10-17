import React from 'react'

const Card = ({children,...rest}) => {
  return (
    <div style={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:2  }} {...rest}>
      {
        children
      }
    </div>
  )
}
export default Card
