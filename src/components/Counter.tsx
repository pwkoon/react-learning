import React, { Component } from 'react'

class Counter extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state ={
      count: 0
    }
  }

  increment() {
    // this.setState({
    //   count: this.state.count + 1
    // })
    // console.log(this.state.count)
    this.setState((prevState: any, props: any) => (
      {count: prevState.count + props.addValue}
    ))
  }

  reset() {
    this.setState({
      count: 0
    })
  }

  message() {
    {return <div>{alert("Congratulation, you reach 10 counts!")}</div>}
  }

  render() {
    return (
      <div>
        {this.state.count === 10 && this.message() }
        <div>Counter - {this.state.count}</div>
        <button onClick={() => this.increment()}>Click</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    )
  }
}

export default Counter
