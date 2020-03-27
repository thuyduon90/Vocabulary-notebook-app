import React from 'react';
import Worditem from './word_item';

class table_list extends React.Component{
  render() {
    let {wordList, handleWordItemDeleteClick, handleWordItemEditClick} = this.props;
    let wordItemElement = null;
    wordItemElement = wordList.map((word,index)=>{
      return <Worditem 
                handleEditClick={handleWordItemEditClick}
                handleDeleteClick={handleWordItemDeleteClick}
                word={word} 
                key={index} 
                order={index}>
              </Worditem>;
    });
    return (
      <div className="col-12 table-list mt-3 mt-md-5">
          <div className="card">
            <div className="card-header bg-info text-white font-weight-bold">
              Word list
            </div>
            <div className="card-body">
              <div className="table-responsive-sm">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th className="d-none d-sm-table-cell" style={{width: '5%'}}>#</th>
                      <th style={{width: '30%'}}>Word</th>
                      <th className="d-none d-sm-table-cell" style={{width: '18%'}}>Synonym</th>
                      <th className="d-none d-sm-table-cell" style={{width: '18%'}}>Annoym</th>
                      <th className="text-center" style={{width: '40%'}}>Mean</th>
                      <th style={{width: '9%'}}>Opt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Word Item */}
                    {wordItemElement}
                    {/* End Word item */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default table_list;



