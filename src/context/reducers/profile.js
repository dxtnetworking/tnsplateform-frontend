import { 
  PROFILE_LOADING, 
  PROFILE_LOAD_ERROR, 
  PROFILE_LOAD_SUCCESS 
} from '../../constants/actionTypes/index';

const profile = (state, {payload, type}) => {
    switch (type) {
      case PROFILE_LOADING:
        return {
          ...state,
          profile: {
            ...state.profile,
            loading: true,
            error: false,
          }
        };
        case PROFILE_LOAD_SUCCESS:
          return {
            ...state,
            profile: {
              ...state.profile,
              loading: false,
              data: payload,
            }
          };
          case PROFILE_LOAD_ERROR:
            return {
              ...state,
              profile: {
                ...state.profile,
                loading: false,
                error: payload,
              }
            };
      default:
        return state;
    }
  };
  
  export default profile;
  