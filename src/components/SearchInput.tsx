import { useContext } from "react";
import { AppContext } from "../context/context";
import { getDropdownOptionsData } from "../context/actions";
import { useRequest } from "../hooks/useRequest";
import { ActionType } from "../interface/actionTypes";
import { JsonObject } from "../interface/JsonObject";

export const SearchInput: React.FC<{}> = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);
  let dispatchTimeout: ReturnType<typeof setTimeout>;
  const { doRequest } = useRequest();

  const handleSearchInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const userInput = e.target.value;

    dispatch({
      type: ActionType.UPDATE_USER_INPUT,
      payload: userInput,
    });

    if (Boolean(dispatchTimeout)) {
      clearTimeout(dispatchTimeout);
    }
    dispatchTimeout = setTimeout(() => dispatchOptions(userInput), 400);

    await getDropdownOptionsData(state.userInput, dispatch, doRequest);
  };

  const dispatchOptions = async (userInput: string) => {
    const data = await getDropdownOptionsData(userInput, dispatch, doRequest);
    data &&
      dispatch({
        type: ActionType.FILTER_OPTIONS,
        payload: getActiveOptionList(userInput, data),
      });
  };

  const getActiveOptionList = (userInput: string, data: JsonObject[]) => {
    const output = data.filter((option: JsonObject) => {
      const country = (option.country as string).toLowerCase();
      const name = (option.name as string).toLowerCase();
      const sentenceToMatch = `${country} ${name}`;
      return sentenceToMatch.includes(userInput.toLowerCase());
    });

    return (
      output &&
      output.slice(0, 10).map((opt: JsonObject) => ({ ...opt, checked: false }))
    );
  };

  return (
    <div className="search-input-wrapper">
      <input
        type="text"
        className="search-input"
        value={state.userInput}
        onChange={handleSearchInputChange}
        autoFocus={true}
      />
    </div>
  );
};
