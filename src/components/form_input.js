import React from 'react';
var flag =true;
class form_input extends React.Component{
  constructor(props){
    super(props);
    this.state=({
      word:'',
      type:'',
      synonym: '',
      annonym:'',
      mean:'',
      createdDate:''
    });
    this.handleInputChange=this.handleInputChange.bind(this);
    this.submitFormFunction = this.submitFormFunction.bind(this);
    flag =true;
  }
  
  static getDerivedStateFromProps(props, state){
    let {wordNeedEdit} = props;
    if(wordNeedEdit!=={}&&flag){
      flag=false;
      state=wordNeedEdit
      return state;
    }else
    return null;
    
  }

  submitFormFunction(event){
    event.preventDefault();
    if(this.state.word!==''){
      this.props.handleSubmitClick(this.state);
    }else{
      this.props.handleSubmitClick();
    }
  }

  handleInputChange(event) {
    const target  = event.target;
    const value   = target.value;
    const name    = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
  
    return (
      <div className="col-12 form-input">
          <form onSubmit={this.submitFormFunction}>
            <div className="form-row mt-3">
              {/* New word */}
              <div className="input-group col-md-4 col-sm-12 mt-1">
                <input type="text" className="form-control" onChange={this.handleInputChange} name="word" value={this.state.word} placeholder="New word" />
                <div className="input-group-append">
                  <select className="form-control" onChange={this.handleInputChange} name="type" value={this.state.type} >
                    <option>Type</option>
                    <option value="n">Noun</option>
                    <option value="v">Verb</option>
                    <option value="a">Adj</option>
                    <option value="av">Adv</option>
                    <option value="#">Other</option>
                  </select>  
                </div>
              </div>{/* End New word */}
              {/* Synonym */}
              <div className="col-md-2 col-sm-3 mt-1">
                <input type="text" className="form-control" onChange={this.handleInputChange} name="synonym" value={this.state.synonym} placeholder="Synonym" />
              </div>{/* End Synonym */}
              {/* Annonym */}
              <div className="col-md-2 col-sm-3 mt-1">
                <input type="text" className="form-control" onChange={this.handleInputChange} name="annonym" value={this.state.annonym} placeholder="Annonym" />
              </div>{/* End Annonym */}
              {/* Mean */}
              <div className="col-md-4 col-sm-6 mt-1">
                <input type="text" className="form-control" onChange={this.handleInputChange} name="mean" value={this.state.mean} placeholder="Mean" />
              </div>{/* End mean */}
            </div>
            <div className="text-center mt-2">
              <button className="btn btn-success" type="submit">Submit</button>
            </div>
          </form>
        </div>
    );
  }
}

export default form_input;



