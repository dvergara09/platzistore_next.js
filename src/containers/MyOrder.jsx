import React, { useContext } from 'react';
import Image from 'next/image';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import iconFlechita from '@icons/flechita.svg';

import styles from '@styles/Header.module.scss';

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image src={iconFlechita} alt="arrow" />
        <p className={styles.title}>My order</p>
      </div>

      <div className={styles['my-order-content']}>
        {state.cart.map((product, index) => (
          <OrderItem product={product} key={index} index={index} />
        ))}

        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>

        <button className={styles['primary-button']}>Checkout</button>
      </div>
    </aside>
  );
};
export default MyOrder;
