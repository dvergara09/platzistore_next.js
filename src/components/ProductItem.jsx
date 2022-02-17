import React, { useContext, useState } from 'react';
import AppContext from '@context/AppContext';
import iconAdd from '@icons/bt_add_to_cart.svg';

import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleCart = (item) => {
    addToCart(item);
  };
  return (
    <div className={styles.ProductItem}>
      <img src={product?.images[0]} alt={product?.title} />
      <div className={styles['product-info']}>
        <div>
          <p>${product?.price}</p>
          <p>{product?.title}</p>
        </div>
        <figure onClick={() => handleCart(product)}>
          <img src={iconAdd} alt="add to cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
