
import React, {Component} from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  incrementCounter = () => {
    const incrementAction = { type: 'INCREMENT' }
    this.props.dispatch(incrementAction);
  }

  decrementCounter = () => {
    const decrementAction = { type: 'DECREMENT' };
    this.props.dispatch(decrementAction);
  }

  render() {
    return (
      <div>
        <h2>Redux Counter App</h2>

        <div>
          <button onClick={this.decrementCounter}>Decrement</button>
          <span>{`    ${this.props.count}    `}</span>
          <button onClick={this.incrementCounter}>Increment</button>
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
