import { useContext } from "react";
import axios from "axios";

import { AppContext } from "../context/context";
import { JsonObject } from "../interface/JsonObject";
import { ActionType } from "../interface/actionTypes";

export const useRequest = () => {
  const { dispatch } = useContext(AppContext);

  const doRequest = async (
    userInput: string
  ): Promise<JsonObject[] | undefined> => {
    try {
      const { data } = await axios.get(
        `http://universities.hipolabs.com/search?country=${userInput}`
      );
      return data;
    } catch (error) {
      dispatch({
        type: ActionType.SET_ERRORS,
        //@ts-ignore
        payload: error.response.statusText,
      });
      setTimeout(() => {
        dispatch({ type: ActionType.REMOVE_ERRORS });
      }, 5000);
    }
  };

  return { doRequest };
};
