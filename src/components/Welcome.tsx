import React, { Component } from 'react'

export default class Welcome extends React.Component<any, any> {
  render() {
    return (
      <>
      <div>Welcome {this.props.name} aka {this.props.heroName}</div>
      {this.props.children}
      </>
    )
  }
}
