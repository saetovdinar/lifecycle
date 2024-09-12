
import Button from './Button';
import styles from './watches.module.css'

interface cardProps  {

    title: string
    description: string
    btn_descr: string
    
  }


export default function Watches(props: cardProps): JSX.Element {
  
 

    return (
      
      <form className={styles.cont}>
      <label className={styles.container}>
          <p className={styles.description}>City</p>
          <input  className={styles.input}></input>
      </label>
      <label className={styles.container}>
          <p className={styles.description}>UTC</p>
          <input   className={styles.input}></input>
      </label>
      <Button />
      <div className={styles.table_container}>
          <div className={styles.description}>

  
          </div>
  
      </div>
  </form> 
          
      
    );
  }