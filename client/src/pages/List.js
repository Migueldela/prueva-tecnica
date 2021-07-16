import React, { Component } from 'react';
import axios from 'axios'
import "./List.css"
import { useState, useEffect } from 'react';
function List () { 

  // Initialize the state
  const [produstsList, setProductList] = useState([]);
  // const [product, setProduct] = useState([]);
 
/*   
  useEffect(() => {
    setProductList([])
  }, [setProduct()]); */
  useEffect(() => {
    getList()
  }, []); 

  // Retrieves the list of items from the Express app
   const getList = async() => {    
    let datos = await axios.get('/api/productos')
    setProductList(datos.data)
  }

  const getProduct = async(event) => {    
    event.preventDefault();
    let product= event.target.elements.name.value 
    console.log(product)
     let datos = await axios.get(`/api/producto/${product}`)
     console.log(datos.data)
     setProductList(datos.data) 
  }
       
 
 console.log("hola")
    return (
      
      <div id="todo" className="App">
            <form onSubmit={getProduct}>
            <input type="text" name="name" />
            <input type="submit" />
            </form>



        <h1>productos:</h1>
          <table>
          <tr>
			      <th>Nombre</th>
			      <th>Relevancia</th>
            <th>Precio</th>
            <th>info del producto</th>
		      </tr>
          {produstsList.map((item,i) => {
              return(
                <tr key={i}>
                <td>{item.name}</td>
                <td>{item.relevancia}/10</td>
                <td>{item.price} $</td>
                <td><button key={i}>+ info</button></td>
              </tr>)})}
            {/*  {product.map((item,i) => {
              return(
                <tr key={i}>
                <td>{item.name}</td>
                <td>{item.relevancia}/10</td>
                <td>{item.price} $</td>
              </tr>
              );
            })}  */}
          </table>
       
        
      
    
      </div>
    );
          }

export default List ;


{/* <div key={i}>
<p>{item.name}</p>
</div> */}