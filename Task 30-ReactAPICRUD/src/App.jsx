import { useEffect, useState } from "react";
import Products from "./assets/Components/Products";
import "./App.css";
import axios from "axios";
import toast from "react-hot-toast";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      toast.error("mehsullari alarken xeta bas verdi");
    } finally {
      setLoading(false);
    }
  };

  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
    toast.success("elave edildi");
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    toast.success("mehsul redakte edildi");
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    toast.success("silindi");
  };

  const resetProducts = () => {
    setProducts([]);
    toast.success("butun mehsullar sifrlandi");
  };

  return (
    <div className="App">
      <Products
        products={products}
        loading={loading}
        addProduct={addProduct}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
        resetProducts={resetProducts}
      />
    </div>
  );
}

export default App;
