import styles from './button.module.css'


export default function Button() {


    return (
      <div className={styles.container}>
        <button  className={styles.btn}>OK</button>
      </div>
    );
  }