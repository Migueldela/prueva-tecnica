import React, { Component } from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
function List () { 

  // Initialize the state
  const [produstsList, setProductList] = useState([]);
  useEffect(() => {
    getList()
  }, []);

  // Retrieves the list of items from the Express app
   const getList = async() => {    
    let datos = await axios.get('/api/productos')
    setProductList(datos.data)
  }

  const getProduct = async(event) => {    
    let product= event.target.value
    let datos = await axios.get(`/api/producto/{product}`)
    setProductList(datos.data)
  }
  useEffect(() => {
    getList()
  }, []);
 

    return (
      
      <div className="App">
            <form action="getProduct">
            <input type="text" name="name" />
            <input type="submit" />
            </form>



        <h1>productos:</h1>
          <table>
          <tr>
			      <th>Nombre</th>
			      <th>Relevancia</th>
            <th>Precio</th>
		      </tr>
            
            {produstsList.map((item,i) => {
              return(
                <tr key={i}>
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

export default List ;


{/* <div key={i}>
<p>{item.name}</p>
</div> */}