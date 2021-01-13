import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import Categories from './components/Categories';
const axios = require('axios')


class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions:[]
    }
  }

  Home() {
    let color
    this.balance() >= 0 ? color = "green" : color = "red"
    return(
      <div className="home">
        <h1>Welcome to your Bank</h1>
      <div className="balance">
        Balance: <span className={color}>{this.balance()}</span>
      </div>
      </div>
    )
  }

  links(){
    return(
      <div className="links">
      <span><Link to="/">Home </Link></span>
      <span><Link to="/operations"> Operations </Link></span>
      <span><Link to="/transactions"> Transactions </Link></span>
      <span><Link to="/categories"> Categories </Link></span>
      </div>
    )
  }

  getTransactions = async () => {
    const res = await axios.get('http://localhost:8080/transactions')
    this.setState({transactions: res.data})

  }

  async componentDidMount() {
    this.getTransactions()
  }

  add = async (trans, sign) =>
  {
    let amount 
    (sign === "-") ? amount = -trans.amount : amount = trans.amount
    await axios.post('http://localhost:8080/transaction', {
      transaction: {
        amount: amount,
        vendor: trans.vendor,
        category: trans.category
      }
    })
    this.getTransactions()
  }

  delete = async (id) => {
    await axios.delete('http://localhost:8080/transaction', {
    data: {id}
    })
    this.getTransactions()
  }

  numOfCategories(){
    let categories = {}
    for(let t of this.state.transactions){
      if(t.category in categories){
        categories[t.category]++
      }else {
        categories[t.category] = 1
      }
    }
    return categories
  }

  balance(){
    let sum = 0
    for(let t of this.state.transactions){
      sum += t.amount
    }
    return sum
  }



  render() {
    return (
      <div className="App">
      <Router>
        {this.links()}
      <div>
        <Route path="/" exact render={() => this.Home()}></Route>
        <Route path="/transactions" exact render={() => <Transactions data={this.state.transactions} delete={this.delete}/>}></Route>
        <Route path="/operations" exact render={() => <Operations add={this.add} />}></Route>
        <Route path="/categories" exact render={() => <Categories categories={this.numOfCategories()} />}></Route>
      </div>
    </Router>
    </div>

    )
  }
}

export default App;
