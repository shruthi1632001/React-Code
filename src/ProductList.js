// import React, { useState, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: ''
//   });
//   const [error, setError] = useState(null);
//   const [editingProductId, setEditingProductId] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = () => {
//     fetch('https://localhost:7117/api/products')
//       .then(response => {
//         console.log('Response status:', response.status);
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Products:', data);
//         setProducts(data);
//       })
//       .catch(error => {
//         console.error('Fetch error:', error);
//         setError(error.message);
//       });
//   };

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const handleAddProduct = () => {
//     fetch('https://localhost:7117/api/products', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to add product');
//       }
//       return response.json();
//     })
//     .then(newProduct => {
//       // Update the product list after successful addition
//       setProducts([...products, newProduct]);
//       // Clear the form data
//       setFormData({ name: '', description: '', price: '' });
//       // Reset error state
//       setError(null);
//     })
//     .catch(error => setError(error.message));
//   };
  

//   const handleEditProduct = (id, name, description, price) => {
//     setEditingProductId(id);
//     setFormData({ name, description, price });
//   };

//   const handleUpdateProduct = () => {
//     const updatedProducts = products.map(product => {
//       if (product.id === editingProductId) {
//         return { ...product, ...formData };
//       }
//       return product;
//     });
//     setProducts(updatedProducts);
//     setFormData({ name: '', description: '', price: '' });
//     setEditingProductId(null);
//   };

//   const handleDeleteProduct = id => {
//     const updatedProducts = products.filter(product => product.id !== id);
//     setProducts(updatedProducts);
//     // You can also optionally send a DELETE request to the backend API
//     // to delete the product from the backend as well
//   };

//   return (
//     <div className="App">
//       <h1>Product Management</h1>
//       {error && <div className="error">{error}</div>}
//       <div className="form-container">
//         <h2>{editingProductId ? 'Edit Product' : 'Add Product'}</h2>
//         <form>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             placeholder="Name"
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="description"
//             value={formData.description}
//             placeholder="Description"
//             onChange={handleInputChange}
//           />
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             placeholder="Price"
//             onChange={handleInputChange}
//           />
//           {editingProductId ? (
//             <button type="button" onClick={handleUpdateProduct}>Update Product</button>
//           ) : (
//             <button type="button" onClick={handleAddProduct}>Add Product</button>
//           )}
//         </form>
//       </div>
//       <div className="product-list">
//         <h2>Product List</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Price</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map(product => (
//               <tr key={product.id}>
//                 {/* <td>{product.name}</td>
//                 <td>{product.description}</td>
//                 <td>{product.price}</td> */}
//                 <td style={{ textAlign: 'center' }}>{product.name}</td>
//                 <td style={{ textAlign: 'center' }}>{product.description}</td>
//                 <td style={{ textAlign: 'center' }}>{product.price}</td>
//                 <td>
//                   <button onClick={() => handleEditProduct(product.id, product.name, product.description, product.price)}>Edit</button>
//                   <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: ''
//   });
//   const [error, setError] = useState(null);
//   const [editingProductId, setEditingProductId] = useState(null);
//   const [popupMessage, setPopupMessage] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = () => {
//     fetch('https://localhost:7117/api/products')
//       .then(response => {
//         console.log('Response status:', response.status);
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Products:', data);
//         setProducts(data);
//       })
//       .catch(error => {
//         console.error('Fetch error:', error);
//         setError(error.message);
//       });
//   };

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAddProduct = () => {
//     fetch('https://localhost:7117/api/products', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to add product');
//       }
//       return response.json();
//     })
//     .then(newProduct => {
//       setProducts([...products, newProduct]);
//       setFormData({ name: '', description: '', price: '' });
//       setPopupMessage('Product added successfully');
//       setTimeout(() => {
//         setPopupMessage(null);
//       }, 3000);
//       setError(null);
//     })
//     .catch(error => setError(error.message));
//   };

//   const handleEditProduct = (id, name, description, price) => {
//     setEditingProductId(id);
//     setFormData({ name, description, price });
//   };

//   const handleUpdateProduct = () => {
//     const updatedProducts = products.map(product => {
//       if (product.id === editingProductId) {
//         return { ...product, ...formData };
//       }
//       return product;
//     });
//     setProducts(updatedProducts);
//     setFormData({ name: '', description: '', price: '' });
//     setEditingProductId(null);
//     setPopupMessage('Product updated successfully');
//     setTimeout(() => {
//       setPopupMessage(null);
//     }, 3000);
//   };

//   const handleDeleteProduct = id => {
//     const updatedProducts = products.filter(product => product.id !== id);
//     setProducts(updatedProducts);
//     setPopupMessage('Product deleted successfully');
//     setTimeout(() => {
//       setPopupMessage(null);
//     }, 3000);
//     // You can also optionally send a DELETE request to the backend API
//     // to delete the product from the backend as well
//   };

//   return (
//     <div className="App">
//       <h1>Product Management</h1>
//       {error && <div className="error">{error}</div>}
//       {popupMessage && <div className="popup">{popupMessage}</div>}
//       <div className="form-container">
//         <h2>{editingProductId ? 'Edit Product' : 'Add Product'}</h2>
//         <form>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             placeholder="Name"
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="description"
//             value={formData.description}
//             placeholder="Description"
//             onChange={handleInputChange}
//           />
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             placeholder="Price"
//             onChange={handleInputChange}
//           />
//           {editingProductId ? (
//             <button type="button" onClick={handleUpdateProduct}>Update Product</button>
//           ) : (
//             <button type="button" onClick={handleAddProduct}>Add Product</button>
//           )}
//         </form>
//       </div>
//       <div className="product-list">
//         <h2>Product List</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Price</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map(product => (
//               <tr key={product.id}>
//                 <td style={{ textAlign: 'center' }}>{product.name}</td>
//                 <td style={{ textAlign: 'center' }}>{product.description}</td>
//                 <td style={{ textAlign: 'center' }}>{product.price}</td>
//                 <td>
//                   <button onClick={() => handleEditProduct(product.id, product.name, product.description, product.price)}>Edit</button>
//                   <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: ''
//   });
//   const [error, setError] = useState(null);
//   const [editingProductId, setEditingProductId] = useState(null);
//   const [popupMessage, setPopupMessage] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = () => {
//     fetch('https://localhost:7117/api/products')
//       .then(response => {
//         console.log('Response status:', response.status);
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Products:', data);
//         setProducts(data);
//       })
//       .catch(error => {
//         console.error('Fetch error:', error);
//         setError(error.message);
//       });
//   };

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAddProduct = () => {
//     fetch('https://localhost:7117/api/products', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Fill all details');
//       }
//       return response.json();
//     })
//     .then(newProduct => {
//       setProducts([...products, newProduct]);
//       setFormData({ name: '', description: '', price: '' });
//       setPopupMessage('Product added successfully');
//       setTimeout(() => {
//         setPopupMessage(null);
//       }, 3000);
//       setError(null);
//     })
//     .catch(error => setError(error.message));
//   };

//   const handleEditProduct = (id, name, description, price) => {
//     setEditingProductId(id);
//     setFormData({ name, description, price });
//   };

//   const handleUpdateProduct = () => {
//     const updatedProducts = products.map(product => {
//       if (product.id === editingProductId) {
//         return { ...product, ...formData };
//       }
//       return product;
//     });
//     setProducts(updatedProducts);
//     setFormData({ name: '', description: '', price: '' });
//     setEditingProductId(null);
//     setPopupMessage('Product updated successfully');
//     setTimeout(() => {
//       setPopupMessage(null);
//     }, 3000);
//   };

//   const handleDeleteProduct = id => {
//     const updatedProducts = products.filter(product => product.id !== id);
//     setProducts(updatedProducts);
//     setPopupMessage('Product deleted successfully');
//     setTimeout(() => {
//       setPopupMessage(null);
//     }, 3000);                           
//   };

//   return (
//     <div className="App">
//       <h1>Product Management</h1>
//       {error && <div className="error">{error}</div>}
//       {popupMessage && <div className="popup">{popupMessage}</div>}
//       <div className="form-container">
//         <h2>{editingProductId ? 'Edit Product' : 'Add Product'}</h2>
//         <form>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             placeholder="Name"
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="description"
//             value={formData.description}
//             placeholder="Description"
//             onChange={handleInputChange}
//           />
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             placeholder="Price"
//             onChange={handleInputChange}
//           />
//           {editingProductId ? (
//             <button type="button" onClick={handleUpdateProduct}>Update Product</button>
//           ) : (
//             <button type="button" onClick={handleAddProduct}>Add Product</button>
//           )}
//         </form>
//       </div>
      
//       <div className="product-list">
//        <div className='center-content'> <h2>Product List</h2></div>
//        <div>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Price</th>
//               <th >Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map(product => (
//               <tr key={product.id}>
//                 <td style={{ textAlign: 'center' }}>{product.name}</td>
//                 <td style={{ textAlign: 'center' }}>{product.description}</td>
//                 <td style={{ textAlign: 'center' }}>{product.price}</td>
//                 <td>
//                   <button onClick={() => handleEditProduct(product.id, product.name, product.description, product.price)}>Edit</button>
//                   <button className="delete"   onClick={() => handleDeleteProduct(product.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: ''
  });
  const [error, setError] = useState(null);
  const [editingProductId, setEditingProductId] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('https://localhost:7117/api/products')
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then(data => {
        console.log('Products:', data);
        setProducts(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError(error.message);
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProduct = () => {
    fetch('https://localhost:7117/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Fill all details');
      }
      return response.json();
    })
    .then(newProduct => {
      setProducts([...products, newProduct]);
      setFormData({ name: '', description: '', price: '' });
      setPopupMessage('Product added successfully');
      setTimeout(() => {
        setPopupMessage(null);
      }, 3000);
      setError(null);
    })
    .catch(error => setError(error.message));
  };

  const handleEditProduct = (id, name, description, price) => {
    setEditingProductId(id);
    setFormData({ name, description, price });
  };

  const handleUpdateProduct = () => {
    const updatedProducts = products.map(product => {
      if (product.id === editingProductId) {
        return { ...product, ...formData };
      }
      return product;
    });
    setProducts(updatedProducts);
    setFormData({ name: '', description: '', price: '' });
    setEditingProductId(null);
    setPopupMessage('Product updated successfully');
    setTimeout(() => {
      setPopupMessage(null);
    }, 3000);
  };

  const handleDeleteProduct = id => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    setPopupMessage('Product deleted successfully');
    setTimeout(() => {
      setPopupMessage(null);
    }, 3000);                           
  };

  return (
    <div className="App">
      <h1>Product Management</h1>
      {error && <div className="error">{error}</div>}
      {popupMessage && <div className="popup">{popupMessage}</div>}
      <div className="form-container">
        <h2>{editingProductId ? 'Edit Product' : 'Add Product'}</h2>
        <form>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            placeholder="Description"
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            placeholder="Price"
            onChange={handleInputChange}
          />
          {editingProductId ? (
            <button type="button" onClick={handleUpdateProduct}>Update Product</button>
          ) : (
            <button type="button" onClick={handleAddProduct}>Add Product</button>
          )}
        </form>
      </div>
      
      <div className="product-list">
       <div className='center-content'> <h2>Product List</h2></div>
       <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th >Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td style={{ textAlign: 'center' }}>{product.name}</td>
                <td style={{ textAlign: 'center' }}>{product.description}</td>
                <td style={{ textAlign: 'center' }}>{product.price}</td>
                <td>
                  <button onClick={() => handleEditProduct(product.id, product.name, product.description, product.price)}>Edit</button>
                  <button className="delete"   onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      
    </div>
  );
};

export default App;

