import React from 'react'

const Hello = () => {
  // return (
  //   <div>Hello</div>
  // )
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hello JSX')
    )
}

export default Hello
