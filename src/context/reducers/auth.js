import { 
  SIGNUP_ERROR, 
  SIGNUP_LOADING, 
  SIGNUP_SUCCESS 
} from './../../constants/actionTypes/index';

const auth = (state, {payload, type}) => {
  switch (type) {
    case SIGNUP_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: true,
          error: false,
        },
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          data: payload
        },
      };
    case SIGNUP_ERROR:
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
