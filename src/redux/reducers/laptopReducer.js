import { BUY_LAPTOP } from '../actions/actionTypes'

const initialState = {
  numOfLaptops: 100,
}

const LaptopReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_LAPTOP: {
      return { numOfLaptops: state.numOfLaptops - 1 }
    }

    default:
      return state
  }
}

export default LaptopReducer