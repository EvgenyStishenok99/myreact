import "../SearhDropHeaderNohidden/SearchDropHeader.css";

const SearchDropHeaderNothidden = (props) => {
  function search(evt) {
    props.onChangeHandler(evt.currentTarget.value);
  }
  return (
    <div
      className={
        props.isShowDropHeader
          ? "search-drop-header"
          : "search-drop-header-nothidden"
      }
    >
      <div className="container-header">
        <div className="search-form-container">
          <input
            type="text"
            onChange={search}
            className="input-search"
            placeholder="Search for..."
            value={props.inputValue}
          />
          <button className="search-button-input">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchDropHeaderNothidden;
