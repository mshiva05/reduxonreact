import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { buyLaptop, buyMobile, fetchUsers } from '../redux/actions'
// connect is a higher order component

export class Shop extends Component {
  // without using redux
  //   state = {
  //     numOfLaptops: 100,
  //   }
  //   clickHandler = () => {
  //     this.setState({ numOfLaptops: this.state.numOfLaptops - 1 })
  //   }
  render() {
    return (
      <div>
        <h1 className="title">Welcome to Shop</h1>
        <div className="items">
          <div className="item">
            <p>Dell Inspiron Laptop</p>
            <p>Available {this.props.numOfLaptops}</p>
            <button onClick={this.props.buyLaptop}> BUY</button>
          </div>
          <div className="item">
            <p>Realme 8 Pro</p>
            <p>Available {this.props.numOfMobiles}</p>
            <button onClick={this.props.buyMobile}> BUY</button>
          </div>
          <div className="item">
            <p>Get Users Data</p>
            <p>count: {this.props.users.length}</p>
            <button onClick={this.props.fetchUsers}> Fetch Users</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    numOfLaptops: state.laptops.numOfLaptops,
    numOfMobiles: state.mobiles.numOfMobiles,
    users: state.users.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyLaptop: () => dispatch(buyLaptop()),
    buyMobile: () => dispatch(buyMobile()),
    fetchUsers:() => dispatch(fetchUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
