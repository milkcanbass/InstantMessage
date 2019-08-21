import {
  GETALLPOST_SUCCESS,
  GETALLPOST_FAIL,
  GETIMG_SUCCESS,
  GETIMG_FAIL,
  CLEAR_ALL_POST,
  LOADING_POST_ON,
  LOADING_POST_OFF,
  LOADING_IMG_ON,
  LOADING_IMG_OFF
} from "../actions/types";

const initialState = {
  allPost: [],
  loadAllPost: false,
  loadingPost: false,
  img: "",
  loadingImg: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GETALLPOST_SUCCESS:
      return {
        ...state,
        ...payload,
        allPost: payload,
        loadAllPost: true,
        loadingPost: true
      };
    case GETALLPOST_FAIL:
    case CLEAR_ALL_POST:
      return {
        ...state,
        ...payload,
        allPost: [],
        loadAllPost: false,
        loadingPost: false,
        loadingImg: false
      };
    case GETIMG_SUCCESS:
      return {
        ...state,
        img: payload,
        loadingImg: true
      };
    case GETIMG_FAIL:
      return {
        ...state,
        img: "",
        loadingImg: false
      };

    case LOADING_POST_ON:
      return {
        ...state,
        loadingPost: true
      };
    case LOADING_POST_OFF:
      return {
        ...state,
        loadingPost: false
      };
    case LOADING_IMG_ON:
      return {
        ...state,
        loadingImg: true
      };
    case LOADING_IMG_OFF:
      return {
        ...state,
        img: "",
        loadingImg: false
      };
    default:
      return state;
  }
}
