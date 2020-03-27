import React from 'react';
import Controlsearch from './control_search';
import Controlsort from './control_sort';

class control extends React.Component{
  constructor(props){
    super(props);
    this.addClick=this.addClick.bind(this);
  }
  addClick(){
    this.props.handleAddClick();
  }
  render() {
    let {openForm, handleSearchOnKeyUp, sortInfo, handleSortDropDownSelect} = this.props;
    let nameOfAddButtonElement, typeOfAddButtonElement = null;
    
    nameOfAddButtonElement = (openForm) ? 'Close and Cancel': 'Add';
    typeOfAddButtonElement = (openForm) ? 'btn btn-danger': 'btn btn-primary';
    return (
      <div className="col-md-12 control">
          {/* Row */}
          <div className="row">
            {/* Search */}
            <Controlsearch
              handleOnKeyUp={handleSearchOnKeyUp}>
            </Controlsearch>
            {/* End Search */}

            {/* Sort */}
            <Controlsort
              handleDropDownSelect={handleSortDropDownSelect}
              sortInfo={sortInfo}>
            </Controlsort>
            {/* End Sort */}
            <div className="container col-md col-sm-6 col-6">
              <button onClick={this.addClick} className={typeOfAddButtonElement} type="button">{nameOfAddButtonElement}</button>
            </div>
          </div>
          {/* End row */}
        </div>
    );
  }
}

export default control;



