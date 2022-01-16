import { useContext } from "react";
import { instance } from "../api/instance";
import { AppContext } from "../context/context";
import axios from "axios";

export const useRequest = () => {
  const { dispatch } = useContext(AppContext);

  const doRequest = async (userInput: any) => {
    try {
      const { data } = await axios.get(
        `http://universities.hipolabs.com/search?country=${userInput}`
      );
      return data;
    } catch (error) {
      dispatch({
        type: "SET_ERRORS",
        //@ts-ignore
        payload: error.response.statusText,
      });
      setTimeout(() => {
        dispatch({ type: "REMOVE_ERRORS" });
      }, 5000);
    }
  };

  return { doRequest };
};
