import React from 'react';
import './App.css';
import Title from './components/title';
import Control from './components/control';
import Forminput from './components/form_input';
import Tablelist from './components/table_list';
import Words from './components/words';
import {filter, includes, orderBy as order, remove} from 'lodash';
import Redux from 'redux';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state=({
      wordList: Words,
      openForm: false,
      searchKey: '',
      sortBy: 'Name',
      sortDir: 'Z-A',
      wordNeedEdit:{}
    });
    this.handleControlAddClick = this.handleControlAddClick.bind(this);
    this.handleControlSearchOnKeyUp= this.handleControlSearchOnKeyUp.bind(this);
    this.handleControlSortDropDownSelect = this.handleControlSortDropDownSelect.bind(this);
    this.handleTableListWordItemDeleteClick = this.handleTableListWordItemDeleteClick.bind(this);
    this.handleFormInputSubmitClick=this.handleFormInputSubmitClick.bind(this);
    this.handleTableListWordItemEditClick=this.handleTableListWordItemEditClick.bind(this);

  }
  handleControlSearchOnKeyUp(keyWord){
    this.setState({
      searchKey:keyWord
    })
  }
  handleControlAddClick(){
    this.setState({
      openForm: !this.state.openForm
    });
  }
  handleControlSortDropDownSelect(newSortInfo){
    this.setState({
      sortBy:newSortInfo.sortBy,
      sortDir:newSortInfo.sortDir
    })
  }
  handleTableListWordItemDeleteClick(idOfWord){
    let temptWordList = this.state.wordList;
    remove(temptWordList, function(value) {
      return value.createdDate===idOfWord;
    });
    this.setState({
      wordList: temptWordList
    })
    localStorage.setItem('words', JSON.stringify(temptWordList));
  }
  handleFormInputSubmitClick(newWord){
    let createdDate ='';
    let temptWordList = this.state.wordList;
    if(newWord!==undefined){
      if(newWord.createdDate===''){
        createdDate=Date.now();
      }else{
        createdDate=newWord.createdDate;
        remove(temptWordList, (n)=> {
          return n.createdDate === createdDate;
        });
      } 
      temptWordList.push({
        word: newWord.word,
        type: newWord.type ,
        synonym: newWord.synonym,
        annonym: newWord.annonym,
        mean: newWord.mean,
        createdDate: createdDate
      });
    }else{
      console.log("Khong co du lieu");
    }

    this.setState({
      openForm: !this.state.openForm,
      wordList:temptWordList,
      wordNeedEdit:{}
    })

    localStorage.setItem('words', JSON.stringify(temptWordList));
  }
  handleTableListWordItemEditClick(wordNeedEdit){
    this.setState({
      openForm:true,
      wordNeedEdit:wordNeedEdit
    })
  }
  static getDerivedStateFromProps(props, state){
    if(JSON.parse(localStorage.getItem("words")===null)){
      localStorage.setItem('words', JSON.stringify([]));
    }
    state.wordList=JSON.parse(localStorage.getItem("words"))
    return state;
    }

  render() {
    
    let {wordList, openForm, searchKey, sortBy, sortDir} = this.state;
    let sortInfo={sortBy: sortBy, sortDir: sortDir};
    let formInputElement, wordListAfterTreatment = null;
    // ======SEARCH======
    wordListAfterTreatment=filter(wordList, (o) =>{ return includes(o.word.toLowerCase(),searchKey.toLowerCase())});
    // ======SORT========
    // let by = (sortBy==='Name')? 'word':'createdDate';
    // let dir = (sortDir==='A-Z')? 'asc':'desc';

    wordListAfterTreatment = order(wordListAfterTreatment, (sortBy==='Name')? ['word']:['createdDate'],(sortDir==='A-Z')? ['asc']:['desc']);
    formInputElement = (this.state.openForm) ? <Forminput wordNeedEdit={this.state.wordNeedEdit} handleSubmitClick={this.handleFormInputSubmitClick}></Forminput> : null;
    return (
      <div className="container">
      <div className="row">

        {/* Title */}
        <Title></Title>
        {/* End Title */}

        {/* Control */}
        <Control
          handleSortDropDownSelect={this.handleControlSortDropDownSelect}
          sortInfo={sortInfo}
          handleSearchOnKeyUp={this.handleControlSearchOnKeyUp}
          openForm={openForm}
          handleAddClick={this.handleControlAddClick}>
        </Control>
        {/* End Control */}

        {/* Form input */}
        
        {/* End Form input */}
        {formInputElement}
        {/* Table list */}
        <Tablelist 
          handleWordItemEditClick = {this.handleTableListWordItemEditClick}
          handleWordItemDeleteClick={this.handleTableListWordItemDeleteClick}
          wordList={wordListAfterTreatment}>
        </Tablelist>
        {/* End Table */}

      </div>
    </div>
    );
  }
}

export default App;
