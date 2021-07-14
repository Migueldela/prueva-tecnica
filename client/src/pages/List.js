import React, { Component } from 'react';
import axios from 'axios'
/* function List () { */
  class List extends Component {
  // Initialize the state

  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {    
    axios('/api/productos')
    .then(list => this.setState({ list:list.data }))
  }

  render() {
    const { list } = this.state;

    return (
      
      <div className="App">
        <h1>productos:</h1>
          <table>
          <tr>
			      <th>Nombre</th>
			      <th>Relevancia</th>
            <th>Precio</th>
		      </tr>
            
            {list.map((item,i) => {
              return(
                <tr>
                <td>{item.name}</td>
                <td>{item.relevancia}/10</td>
                <td>{item.price} $</td>
              </tr>


               
              );
            })}
          </table>
       
        
      
    
      </div>
    );
  }
}

export default List;


{/* <div key={i}>
<p>{item.name}</p>
</div> */}