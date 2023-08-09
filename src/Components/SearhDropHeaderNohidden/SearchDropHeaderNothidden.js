import "../SearhDropHeaderNohidden/SearchDropHeader.css";

/* переписать эту шляпу с сеарчом 

Подсказка - сеарч нужно вынести в самый верх в юзСтэйт и пробрасывать вниз по компонентам значение чтобы потом 
фильтровать массив

*/ 

const SearchDropHeaderNothidden = (props) => {
  function search() {
    let input = document.querySelector(".input-search");
    let titles = document.querySelectorAll(".project-title");

    let stringToFind = input.value.toUpperCase();
    titles.forEach((item) => {
      let title = item.textContent;

      if (title.includes(stringToFind)) {
        item.closest(".container-section").style.display = "block";
      } else {
        item.closest(".container-section").style.display = "none";
      }
    });
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
            onInput={search}
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
