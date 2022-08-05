import React from 'react'
import './style.css'
import { connect, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { buyLaptop, buyMobile, fetchUsers } from '../redux/actions'
// connect is a higher order component

function FunctionShop(props) {
  // without using redux
  //   state = {
  //     numOfLaptops: 100,
  //   }
  //   clickHandler = () => {
  //     this.setState({ numOfLaptops: this.state.numOfLaptops - 1 })
  //   }

  let users = useSelector((state) => state.users.users)
  let numOfLaptops = useSelector((state) => state.laptops.numOfLaptops)
  let numOfMobiles = useSelector((state) => state.mobiles.numOfMobiles)

  return (
    <div>
      <h1 className="title">Welcome to Shop</h1>
      <div className="items">
        <div className="item">
          <p>Dell Inspiron Laptop</p>
          <p>Available {numOfLaptops}</p>
          <button onClick={props.buyLaptop}> BUY</button>
        </div>
        <div className="item">
          <p>Realme 8 Pro</p>
          <p>Available {numOfMobiles}</p>
          <button onClick={props.buyMobile}> BUY</button>
        </div>
        <div className="item">
          <p>Get Users Data</p>
          <p>count: {users.length}</p>
          <button onClick={props.fetchUsers}> Fetch Users</button>
        </div>
      </div>
    </div>
  )
}

// This has been replaced by useSelector
// const mapStateToProps = (state) => {
//   return {
//     numOfLaptops: state.laptops.numOfLaptops,
//     numOfMobiles: state.mobiles.numOfMobiles,
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ buyLaptop, buyMobile, fetchUsers }, dispatch)
  //   bindActionCreators is replacing below code
  //   {
  //     buyLaptop: () => dispatch(buyLaptop()),
  //     buyMobile: () => dispatch(buyMobile()),
  //     fetchUsers: () => dispatch(fetchUsers()),
  //   }
}

export default connect(mapDispatchToProps)(FunctionShop)
