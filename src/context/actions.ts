import { ActionType, AppActions } from "../interface/actionTypes";
import { JsonObject } from "../interface/JsonObject";

export const getDropdownOptionsData = async (
  userInput: string,
  dispatch: React.Dispatch<AppActions>,
  doRequest: (userInput: string) => Promise<JsonObject[] | undefined>
) => {
  try {
    dispatch({ type: ActionType.START_LOADING });
    const data = await doRequest(userInput);
    dispatch({ type: ActionType.END_LOADING });
    return data;
  } catch (error) {
    dispatch({ type: ActionType.END_LOADING });
  }
};
