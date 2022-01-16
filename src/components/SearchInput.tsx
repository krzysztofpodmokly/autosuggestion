import { useContext } from "react";
import { AppContext } from "../context/context";
import { getDropdownOptionsData } from "../context/actions";
import { useRequest } from "../hooks/useRequest";

export const SearchInput = (props: any) => {
  const { state, dispatch } = useContext(AppContext);
  let dispatchTimeout: any;
  const { doRequest } = useRequest();

  const handleSearchInputChange = async (e: any) => {
    const userInput = e.target.value;

    dispatch({
      type: "UPDATE_USER_INPUT",
      payload: userInput,
    });

    if (Boolean(dispatchTimeout)) {
      clearTimeout(dispatchTimeout);
    }
    dispatchTimeout = setTimeout(() => dispatchOptions(userInput), 500);

    await getDropdownOptionsData(state.userInput, dispatch, doRequest);
  };

  const dispatchOptions = async (userInput: string) => {
    const data = await getDropdownOptionsData(userInput, dispatch, doRequest);
    dispatch({
      type: "FILTER_OPTIONS",
      payload: getActiveOptionList(userInput, data),
    });
  };

  const getActiveOptionList = (userInput: string, data: any) => {
    const output = data.filter((option: any) => {
      const sentenceToMatch = `${option.country.toLowerCase()} ${option.name.toLowerCase()}`;
      return sentenceToMatch.includes(userInput.toLowerCase());
    });

    return (
      output &&
      output.slice(0, 10).map((opt: any) => ({ ...opt, checked: false }))
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
