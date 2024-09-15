import styles from './clocks.module.css'
import { timeProps }  from './App';

interface timePropAdd extends timeProps {
  
  deleteOnClick: () => void
}

export default function Clocks(props: timePropAdd): JSX.Element {


    return (
      <div className={styles.container}>
        <div className={styles.city}>{props.city}</div>
        <div className={styles.time_cont}>
          <div  className={styles.hours}>{props.hours}:</div>
          <div className={styles.min}>{props.minutes}:</div>
          <div className={styles.sec}>{props.seconds}</div>
          <button id={props.id} onClick={props.deleteOnClick} className={styles.delete_btn}>X</button>
        </div>
      </div>
    );
  }