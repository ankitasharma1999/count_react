import React from "react"
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
  
    increase() {
      this.setState({
        count: this.state.count + 1
      });
    };
    
    decrease() {
      this.setState({
        count: this.state.count - 1
      });
    };
    render() {
      return (
  
     <div>
        <h1>The Count is:</h1>
        <button className='inc+' onClick={() => this.increase()}>Increasing!</button>
        <button className='dec-' onClick={() => this.decrease()}>Decreasing!</button>
        <h3>Current Count: {this.state.count}</h3>
    </div>
      );
    }
  };
  export default Counter;


