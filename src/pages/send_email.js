import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/EmailSend.module.scss';

const EmailSend = () => {
  return (
    <div className={styles.EmailSend}>
      <div className={styles['EmailSend-container']}>
        <Image src={logo} alt="logo" className={styles.logo} />

        <h1 className={styles.title}>Email has been sent!</h1>
        <p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>

        <div className={styles['email-image']}>
          <Image src="./icons/email.svg" alt="email" />
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

export default EmailSend;
