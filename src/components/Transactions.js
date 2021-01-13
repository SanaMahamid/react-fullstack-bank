import React, { Component } from 'react';
import Transaction from './Transaction'

class Transactions extends Component {
  render() {
      const data = this.props.data
    return (
        <div className="transactions">
            {data.map((d,i) => {
            return <Transaction transData = {d} delete={this.props.delete} key={i}/>
        })}
        </div>
    ) 

  }
}

export default Transactions