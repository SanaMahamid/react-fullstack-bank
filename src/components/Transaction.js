import React, { Component } from 'react'

class Transaction extends Component {
  delete = () => { this.props.delete(this.props.transData._id)}
  render() {
      const trans = this.props.transData
      let color
      trans.amount > 0 ? color = "green" : color = "red"
    return (
            <div>
                <span>amount: <span className = {color}>{trans.amount}</span> </span>
                <span>vendor: {trans.vendor} </span> 
                <span>category: {trans.category} </span>
                <button onClick={this.delete}>Delete</button>
            </div>
    ) 

  }
}

export default Transaction