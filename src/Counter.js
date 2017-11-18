
import React, {Component} from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  incrementCounter = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrementCounter = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <h2>Redux Counter App</h2>
        <div>
          <button onClick={this.decrementCounter}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.incrementCounter}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
