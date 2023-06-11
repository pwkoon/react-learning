import React, { Component } from 'react'

export default class Message extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
    this.state ={
      message: 'Welcome Visitor'
    }
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing!'
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}
