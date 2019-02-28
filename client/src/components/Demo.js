import React, { Component } from 'react';

class Demo extends Component {
  state={name:"Maaz"}
  render() {
    return (
      <div className="App">
        This is Demo Component for {this.state.name} on {this.props.day}
        <br></br>today is {this.props.date}
        <Emp day="27"></Emp>
      </div>
    );
  }
}

const Emp=(props)=>{
    return <div>This is stateless component<br></br>{props.day}-{Number(props.day)%2==0?'Even Day':'Odd Day'}</div>
}

export default Demo;
