import React, { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState("");
  const [editingProductId, setEditingProductId] = useState(null);
  const [editingProductName, setEditingProductName] = useState("");

  // getirmet 
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // elave emek
  const addProduct = () => {
    if (!newProductName.trim()) {
      alert("mehsul adi bos ola bilmez");
      return;
    }

    const newProduct = {
      name: newProductName,
    };

    fetch("https://northwind.vercel.app/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts((prevProducts) => [...prevProducts, data]);
        setNewProductName("");
      });
  };

  // delete
  const deleteProduct = (id) => {
    fetch(`https://northwind.vercel.app/api/products/${id}`, {
      method: "DELETE",
    }).then(() => {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    });
  };

  // update
  const updateProduct = (id) => {
    if (!editingProductName.trim()) {
      alert("mehsul adi bos ola bilmez");
      return;
    }

    const updatedProduct = {
      name: editingProductName,
    };

    fetch(`https://northwind.vercel.app/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? { ...product, name: editingProductName } : product
          )
        );
        setEditingProductId(null);
        setEditingProductName("");
      });
  };

  const startEditing = (product) => {
    setEditingProductId(product.id);
    setEditingProductName(product.name);
  };

  return (
    <div>
      <h1>Nihad's Products</h1>

      {/* yenisini elave etmek */}
      <div>
        <input
          type="text"
          placeholder="yeni mehsul adi"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <button onClick={addProduct}>Add</button>
      </div>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {editingProductId === product.id ? (
              <div>
                <input
                  type="text"
                  value={editingProductName}
                  onChange={(e) => setEditingProductName(e.target.value)}
                />
                <button onClick={() => updateProduct(product.id)}>Update</button>
                <button onClick={() => setEditingProductId(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                {product.name}{" "}
                <button onClick={() => startEditing(product)}>Edit</button>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
