import {
  ICommentState,
  CREATE_COMMENT,
  ICommentType,
  GET_COMMENTS,
  REPLY_COMMENT,
} from '../types/commentType';

const initialState = {
  data: [],
  total: 1,
};

const commentReducer = (
  state: ICommentState = initialState,
  action: ICommentType
): ICommentState => {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };

    case GET_COMMENTS:
      return action.payload;

    case REPLY_COMMENT:
      return {
        ...state,
        data: state.data.map((item) =>
          item._id === action.payload.comment_root
            ? {
                ...item,
                replyCM: [action.payload, ...(item.replyCM as [])],
              }
            : item
        ),
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        data: state.data.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };

    case UPDATE_REPLY:
      return {
        ...state,
        data: state.data.map((item) =>
          item._id === action.payload.comment_root
            ? {
                ...item,
                replyCM: item.replyCM?.map((rp) =>
                  rp._id === action.payload._id ? action.payload : rp
                ),
              }
            : item
        ),
      };

    default:
      return state;
  }
};

export default commentReducer;
