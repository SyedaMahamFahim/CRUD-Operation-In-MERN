import {CAR_DATA_REQUEST,CAR_DATA_SUCCESS,CAR_DATA_FAIL,CLEAR_ERRORS} from '../constant/carDataConstants'

export const carDataReducer = (state = { carData: {} }, action) => {
    switch (action.type) {
      case CAR_DATA_REQUEST:
        return {
          loading: true,
        };
      case CAR_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          success: action.payload.success,
          carData: action.payload,
        };
  
      case CAR_DATA_FAIL:
        return {
          ...state,
          loading: false,
          carData: null,
          error: action.payload,
        };

        case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
  
      default:
        return state;
    }
  };


  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  