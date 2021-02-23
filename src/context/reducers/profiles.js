import { 
  PROFILES_LOADING, 
  PROFILES_LOAD_ERROR, 
  PROFILES_LOAD_SUCCESS 
} from './../../constants/actionTypes/index';

const profiles = (state, {payload, type}) => {
    switch (type) {
      case PROFILES_LOADING:
        return {
          ...state,
          profiles: {
            ...state.profiles,
            loading: true,
            error: false,
          }
        };
        case PROFILES_LOAD_SUCCESS:
          return {
            ...state,
            profiles: {
              ...state.profiles,
              loading: false,
              data: payload,
            }
          };
          case PROFILES_LOAD_ERROR:
            return {
              ...state,
              profiles: {
                ...state.profiles,
                loading: false,
                error: payload,
              }
            };
      default:
        return state;
    }
  };
  
  export default profiles;
  