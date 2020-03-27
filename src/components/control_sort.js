import React from 'react';

class control_sort extends React.Component{
  constructor(props){
    super(props);
    this.DropDownSelectFunction = this.DropDownSelectFunction.bind(this);
  }
  DropDownSelectFunction(sortBy, sortDir){
    this.props.handleDropDownSelect({sortBy: sortBy, sortDir: sortDir});
  }
  render() {
    let {sortInfo} = this.props;
    return (
      <div className="dropdown col-md col-sm-6 col-6">
        <a className="btn btn-success dropdown-toggle" href="/#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sort by 
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a onClick={this.DropDownSelectFunction.bind(this,'Name', 'A-Z')} className="dropdown-item" href="/#">Name - A-Z</a>
          <a onClick={this.DropDownSelectFunction.bind(this,'Name', 'Z-A')} className="dropdown-item" href="/#">Name - Z-A</a>
          <div className="dropdown-divider" />
          <a onClick={this.DropDownSelectFunction.bind(this,'Date', 'A-Z')} className="dropdown-item" href="/#">Created date - A-Z</a>
          <a onClick={this.DropDownSelectFunction.bind(this,'Date', 'Z-A')} className="dropdown-item" href="/#">Created date - Z-A</a>
        </div>
        <span className="badge badge-primary d-none d-sm-inline">{sortInfo.sortBy +" - "+sortInfo.sortDir}</span>
      </div>
    );
  }
}

export default control_sort;



