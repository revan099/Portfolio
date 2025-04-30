import { useState } from "react";
import ProductModal from "../Components/ProductModal";
import styles from "./../css/style.module.css";

const Product = ({ product, updateProduct, deleteProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => setIsModalOpen(true);
  const handleDelete = () => deleteProduct(product.id);
  const handleClose = () => setIsModalOpen(false);

  return (
    <div className={styles.productCard}>
      <h2>{product.title}</h2>
      <p>Qiymət: ${product.price}</p>
      <div className={styles.buttons}>
        <button className="edit" onClick={handleEdit}>redaktə et</button>
        <button className="delete" onClick={handleDelete}>sil</button>
      </div>

      {isModalOpen && (
        <ProductModal
          product={product}
          onClose={handleClose}
          updateProduct={updateProduct}
        />
      )}
    </div>
  );
};

export default Product;
