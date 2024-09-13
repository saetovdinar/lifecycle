import styles from './clocks.module.css'


export default function Clocks(): JSX.Element {


    return (
      <div className={styles.container}>
        <div className={styles.hours}>00:</div>
        <div className={styles.min}>00:</div>
        <div className={styles.sec}>00</div>
      </div>
    );
  }