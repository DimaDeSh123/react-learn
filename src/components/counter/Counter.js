import React from 'react';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: props.initialValue || 0
      };
    }
  
    decrement = () => {
      this.setState(() => ({
        count: this.state.count - 1
      }));
    };
  
    increment = () => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    };
  
    render() {
      return React.createElement(
        'div',
        null,
        React.createElement('span', null, `Count: ${this.state.count}`),
        React.createElement('button', { onClick: this.decrement }, '-'),
        React.createElement('button', { onClick: this.increment }, '+')
      );
    }
  }

  export default Counter; 