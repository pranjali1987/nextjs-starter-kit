import React from 'react'
import styles from './search.module.css';

function Index() {
  return (
    <input type="text" placeholder='Search by name,email or role' className={styles.inputBox} />
  )
}

export default Index