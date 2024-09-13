import Clocks from './Clocks'
import Button from './Button';
import styles from './watches.module.css';
import { inputValue }  from './App';

interface cardProps  {
    cityOnChange: ()=> void
    UTCOnChange: ()=> void
    addOnClick: ()=>void
    cityInput: inputValue
    UTCInput: inputValue

    
  }


export default function Watches(props: cardProps): JSX.Element {
  
 

    return (
      
      <form className={styles.cont}>
      <label className={styles.container}>
          <p className={styles.description}>City</p>
          <input onChange={props.cityOnChange} value={props.cityInput.value} className={styles.input}></input>
      </label>
      <label className={styles.container}>
          <p className={styles.description}>UTC</p>
          <input onChange={props.UTCOnChange} value={props.UTCInput.value}  className={styles.input}></input>
      </label>
      <Button addHandler={props.addOnClick}/>
      <div className={styles.table_container}>
         <Clocks></Clocks>
  
      </div>
  </form> 
          
      
    );
  }