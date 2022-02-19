import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@logos/logo_yard_sale.svg';
import emailIcon from '@icons/email.svg';
import styles from '@styles/RecoveryPassword.module.scss';

const RecoveryPassword = () => {
  return (
    <div className={styles.RecoveryPassword}>
      <div className={styles['RecoveryPassword-container']}>
        <Image src={logo} alt="logo" className={styles.logo} />

        <h1 className={styles.title}>Email has been sent!</h1>
        <p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>

        <div className={styles['email-image']}>
          <Image src={emailIcon} alt="email" />
        </div>

        <button className={`${styles['primary-button']} ${styles['login-button']}`}>Login</button>

        <p className={styles.resend}>
          <span>Didnt receive the email?</span>
          <Link href="/">Resend</Link>
        </p>
      </div>
    </div>
  );
};

export default RecoveryPassword;
