import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  users: [],
  error: '',
  isLoading: false,
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, isLoading: true }

    case FETCH_USERS_SUCCESS:
      return { isLoading: false, users: action.payload, error: '' }

    case FETCH_USERS_FAILURE:
      return { isLoading: false, users: '', error: action.payload }

    default:
      return state
  }
}
export default UserReducer
