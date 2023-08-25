import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Full from "./Components/Full/Full";
import { useSelector } from "react-redux";
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const projectList = useSelector((state) => state.technologiesReducer);
  const [searchData, setSearchData] = useState(projectList);
  const onChangeHandler = (value) => {
    setInputValue(value);
    filterData(value);
  };
  const filterData = (filterText) => {
    const search = new RegExp(filterText, "i");
    const filteredData = projectList.filter((dataItem) => {
      return search.test(dataItem.title);
    });
    setSearchData(filteredData);
  };
  return (
    <div className="body">
      <Full
        inputValue={inputValue}
        onChangeHandler={onChangeHandler}
        searchData={searchData}
      />
    </div>
  );
};

export default App;
