import React from 'react'
import preloaderMain from '../../etc/img/preloaders/main-pre.gif'
import styles from './Preloaders.module.css'

const PreloaderMain = () => {
  return <div className={styles.preloader__main}>
      <img alt="preloader" src={preloaderMain}/>
  </div>
};

export default PreloaderMain