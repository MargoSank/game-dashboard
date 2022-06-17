interface ErrorAction {
  type: string;
  error: string;
}

export interface ErrorState {
  [key: string]: null | string;
}

const getErrorMatches = (actionType: string) =>
  /(.*)_(REQUEST|FAILURE)/.exec(actionType);

const errorReducer = (state: ErrorState = {}, action: ErrorAction) => {
  const matches = getErrorMatches(action.type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestStatus] = matches;
  return {
    ...state,
    [requestName]: requestStatus === "FAILURE" ? action.error : null
  };
};

export default errorReducer;
