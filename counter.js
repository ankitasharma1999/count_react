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
  
    reset() {
      this.setState({
        count: 0
      });
    };
  
    render() {
      return (
  
     <div>
        <h1>The Count is:</h1>
        <button className='inc' onClick={(e) => this.increase(e)}>Increasing!</button>
        <button className='dec' onClick={(e) => this.decrease(e)}>Decreasing!</button>
        <button className='reset' onClick={(e) => this.reset(e)}>Reset</button>
        <h3>Current Count: {this.state.count}</h3>
    </div>
      );
    }
  };
  export default Counter;


