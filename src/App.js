import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Full from "./Components/Full/Full";
const projectList = [
  {
    id: 1,
    icon: "icon-logo-1",
    title: "SPRING BOOT",
    description:
      "Takes an opinionated view of building Spring applications and gets you up and running as quicklyas possible.",
  },
  {
    id: 2,
    icon: "icon-logo-2",
    title: "SPRING FRAMEWORK",
    description:
      "Provides core support for dependency injection, transaction management, web apps, data access,messaging and more.",
  },
  {
    id: 3,
    icon: "icon-logo-3",
    title: "SPRING CLOUD DATA FLOW",
    description:
      "An orchestration service for composable data microservice applications on modern runtimes.",
  },

  {
    id: 4,
    icon: "icon-logo-4",
    title: "SPRING CLOUD",
    description:
      "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
  },
  {
    id: 5,
    icon: "icon-logo-5",
    title: "SPRING DATA",
    description:
      " Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.kes an opinionated view of building Spring applications and gets you up and running as quicklyas possible.",
  },

  {
    id: 6,
    icon: "icon-logo-6",
    title: "SPRING INTEGRATION",
    description:
      " Supports the well-known <em>Enterprise Integration Patterns</em> via lightweight messaging and declarative adapters.",
  },
];
const App = () => {
  const [inputValue, setInputValue] = useState("");

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
