import "../SearhDropHeaderNohidden/SearchDropHeader.css";

/* переписать эту шляпу с сеарчом 

Подсказка - сеарч нужно вынести в самый верх в юзСтэйт и пробрасывать вниз по компонентам значение чтобы потом 
фильтровать массив

*/

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
