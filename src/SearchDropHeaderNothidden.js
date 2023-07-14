const SearchDropHeaderNothidden = (props) => {
    return (
      <div className ={props.isShowDropHeader ? 'search-drop-header' : 'search-drop-header-nothidden'}>
        <div className="container-header">
          <div className="search-form-container">
            <input type="text" oninput="search()" className="input-search" placeholder="Search for..." />
            <button className="search-button-input">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
   export default SearchDropHeaderNothidden;