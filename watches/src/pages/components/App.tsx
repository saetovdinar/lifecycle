import styles from './app.module.css';
import Watches from './Watches';
import { useState } from 'react';


export interface inputValue {
  value: string
}
export default function App(): JSX.Element {
  
  const [cityInput, setCityInput] = useState<inputValue> ({
    value: 'Moscow',
  })

  const [UTCInput, setUTCInput] = useState<inputValue>({
    value: '+8',
  })

  const cityChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setCityInput({value : (event.target as HTMLInputElement).value})
  }

  const UTCChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setUTCInput({value : (event.target as HTMLInputElement).value})
  }
  const addWatchOnCLick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    
    setUTCInput({value : ''});
    setCityInput({value : ''});
  }
  
  const cardProps = {
    cityInput: cityInput,
    UTCInput: UTCInput,
    UTCOnChange: UTCChangeHandler,
    cityOnChange: cityChangeHandler,
    addOnClick: addWatchOnCLick,
  }

  return (
    <div className={styles.container}>
      <Watches {...cardProps}/>
    </div>
  );
}