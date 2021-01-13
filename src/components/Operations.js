import React, { Component } from 'react'

class Operations extends Component {

    constructor(){
        super()
        this.state = {
            amount: "",
            vendor: "",
            category: ""
        }
    }
    
    handleSelect = (event) => {
      const {value, name} = event.target;    
      this.setState({[name]: value})
  }

  addPositive = () => {
    this.props.add(this.state, "+") 
    this.clearInputs()
  }

  addNegative = () => {
    this.props.add(this.state, "-")
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      amount: "",
      vendor: "",
      category: ""
    })
  }
  


  render() {
    return (
        <div className="operations">
          <span>Amount: </span>
          <input id="amount-input" name="amount" value={this.state.amount} onChange={this.handleSelect} />
          <span> Vendor: </span>
          <input id="vendor-input" name="vendor" value={this.state.vendor} onChange={this.handleSelect} />
          <span> Category: </span>
          <input id="category-input" name="category" value={this.state.category} onChange={this.handleSelect} />
          <div>
            <button id="deposit" onClick={this.addPositive}>Deposit</button>
            <button id="withdraw" onClick={this.addNegative}>Withdraw</button>
          </div>
        </div>
    ) 

  }
}

export default Operations