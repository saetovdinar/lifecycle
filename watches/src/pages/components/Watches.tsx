import Clocks from './Clocks'
import Button from './Button';
import styles from './watches.module.css';
import { inputValue, timeProps }  from './App';

interface cardProps  {
    cityOnChange(event: React.ChangeEvent<HTMLInputElement>):  void
    UTCOnChange(event: React.ChangeEvent<HTMLInputElement>):  void
    addOnClick(): void
    cityInput: inputValue
    UTCInput: inputValue
    time: [timeProps]
    deleteHandler(): void

    
    
  }



export default function Watches(props: cardProps): JSX.Element {
  
 

    return (
      
      <form className={styles.cont}>
      <label className={styles.container}>
          <p className={styles.description}>City</p>
          <input onChange={props.cityOnChange} value={props.cityInput.value} className={styles.input}></input>
      </label>
      <label className={styles.container}>
          <p className={styles.description}>UTC (Введите от -12 до +12)</p>
          <input onChange={props.UTCOnChange} value={props.UTCInput.value}  className={styles.input}></input>
      </label>
      <Button  addHandler={props.addOnClick}/>
      <div className={styles.table_container}>
         {
          props.time.map((item: timeProps, index: number) => <Clocks deleteOnClick={props.deleteHandler}  key={index}   {...item} id={item.id}></Clocks>)
         }
  
      </div>
  </form> 
          
      
    );
  }