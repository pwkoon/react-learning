import React from 'react'

const Greet = (props: any) => {
  return (
    <>
      <div>Hello {props.name} aka {props.heroName}</div>
      {props.children}
    </>
  )
}

export default Greet
