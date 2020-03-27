import React from 'react';

class control_search extends React.Component{
  constructor(props){
    super(props);
    this.state={
      searchkey:''
    }
    this.onChangeFunction = this.onChangeFunction.bind(this);
    this.onKeyUpFunction = this.onKeyUpFunction.bind(this);
    this.onClickFunction = this.onClickFunction.bind(this);
  }

  onChangeFunction(event){
    this.setState({
      searchkey: event.target.value
    });
  }

  onKeyUpFunction(){
    this.props.handleOnKeyUp(this.state.searchkey);
  }

  onClickFunction(){
    this.setState({
      searchkey: ''
    });
    this.props.handleOnKeyUp('');
  }

  render() {
    return (
      <div className="col-md col-sm-12 input-group mb-3 search">
        <input onKeyUp={this.onKeyUpFunction} onChange={this.onChangeFunction} value={this.state.searchkey} type="text" className="form-control" placeholder="Search for..." />
        <div className="input-group-append">
          <span onClick={this.onClickFunction} className="btn btn-primary" id="basic-addon2">Clear</span>
        </div>
      </div>
    );
  }
}

export default control_search;



