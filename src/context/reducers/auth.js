import { 
  SIGNUP_ERROR, 
  SIGNUP_LOADING, 
  SIGNUP_SUCCESS,
  LOGIN_LOADING, 
  LOGIN_SUCCESS,
  LOGIN_ERROR, 
} from './../../constants/actionTypes/index';

const auth = (state, {payload, type}) => {
  switch (type) {
    case SIGNUP_LOADING:
    case LOGIN_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: true,
          error: false,
        },
      };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          data: payload
        },
      };
    case SIGNUP_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          error: payload
        },
      };
    default:
      return state;
  }
};

export default auth;
