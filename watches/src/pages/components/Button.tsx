import styles from './button.module.css'


export default function Button({addHandler}: ()=>void): JSX.Element {


    return (
      <div className={styles.container}>
        <button onClick={addHandler}  className={styles.btn}>Add</button>
      </div>
    );
  }