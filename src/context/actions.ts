export const getDropdownOptionsData = async (
  userInput: any,
  dispatch: any,
  doRequest: any
) => {
  try {
    dispatch({ type: "START_LOADING" });
    const data = await doRequest(userInput);
    dispatch({ type: "END_LOADING" });
    return data;
  } catch (error) {
    dispatch({ type: "END_LOADING" });
  }
};
