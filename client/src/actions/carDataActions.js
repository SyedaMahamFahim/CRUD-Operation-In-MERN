import {
  CAR_DATA_REQUEST,
  CAR_DATA_SUCCESS,
  CAR_DATA_FAIL,
  CLEAR_ERRORS,
} from "../constant/carDataConstants";
import axios from "axios";

// Register
export const registerCarData = (carData) => async (dispatch) => {
  try {
    dispatch({ type: CAR_DATA_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/v1/registercars`, carData, config);
    console.log({data})
    dispatch({ type: CAR_DATA_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({ 
      type: CAR_DATA_FAIL,
      payload: error.response.data.message,
    });
    console.log(error.response.data.message)
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
