import React from 'react';

class word_item extends React.Component{
  constructor(probs){
    super(probs);
    this.deleteFunction=this.deleteFunction.bind(this);
    this.editFunction = this.editFunction.bind(this);
  }
  deleteFunction(idOfWord){
    this.props.handleDeleteClick(idOfWord);
  }
  editFunction(wordNeedEdit){
    this.props.handleEditClick(wordNeedEdit);
  }

  render() {
    let {order, word} = this.props;
    return (
      <tr>
        <th className="d-none d-sm-table-cell">{order+1}</th>
        <td>{word.word+" ("+word.type+")"}</td>
        <td className="d-none d-sm-table-cell">{word.synonym} </td>
        <td className="d-none d-sm-table-cell">{word.annonym} </td>
        <td>{word.mean} </td>
        <td className="text-right">
          <i onClick={this.editFunction.bind(this, word)} style={{cursor: 'pointer'}} className="fas fa-edit" />  
          <i onClick={()=>{if (window.confirm('Are you sure to delete this word?')) this.deleteFunction(word.createdDate)}} 
            style={{cursor: 'pointer'}} className="far fa-trash-alt text-danger" />
        </td>
      </tr>       
    );
  }
}

export default word_item;



