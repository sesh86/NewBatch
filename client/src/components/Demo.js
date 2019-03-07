import React, { Component } from 'react';

class Demo extends Component {
  state={name:"Maria",date:7,designation:'CEO'}
  render() {
    return (
      <div className="App">
            Hello {this.state.name}!
          <span>Todays is {this.state.date}</span>
          <Emp data={this.state}/>
      </div>
    );
  }
}

const Emp=(props)=>{
  return (<div>Hi {props.data.name}<div>Welcome {props.data.designation}
  <div>{props.data.date%2==0?'Even Day':'Odd Day'}</div>

  </div></div>)
}

export default Demo;
