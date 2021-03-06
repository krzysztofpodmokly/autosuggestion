import { useContext } from "react";

import { AppContext } from "../context/context";
import { SearchInput } from "./SearchInput";
import { ResetButton } from "./ResetButton";
import { Option } from "./Option";
import { JsonObject } from "../interface/JsonObject";

export const Dropdown: React.FC<{}> = (): JSX.Element => {
  const { state } = useContext(AppContext);

  return (
    <div className="option-list-wrapper">
      <SearchInput />
      <ul className="dropdown-list">
        {state.filteredOptions &&
          state.filteredOptions.map((option: JsonObject, index: number) => {
            return <Option key={index} option={option} index={index} />;
          })}
      </ul>
      <ResetButton />
    </div>
  );
};
