import styles from './app.module.css';
import Watches from './Watches';
import { useState, useEffect } from 'react';

export interface timeProps  {
  hours: string,
  minutes: string,
  seconds: string,
  city: string,
  UTC: number,
  id: string
  
}
export interface inputValue {
  value: string
}
export default function App(): JSX.Element {
  
  const [time, setTime] = useState <timeProps[]>([{
    hours: "0",
    minutes: "0",
    seconds:"0",
    city: 'New York',
    UTC: 0,
    id: '0',
  },
]);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime: timeProps[]): timeProps[] => {
        return prevTime.map((item: timeProps) => {
          return {...item, 
            hours: String(formatTime(new Date().getHours() + item.UTC)  < 10 ? '0' + (formatTime(new Date().getHours() + item.UTC)) : formatTime(new Date().getHours() + item.UTC)), 
            minutes: String(new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()), 
            seconds: String(new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()),
          };
        })
      });
    }, 1000);
    return () => clearInterval(interval);
  })

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

  const formatTime = (time: number): number => {
    if(time > 23) {
      return time - 24;
    }
    if(time < 0) {
      return time + 24;
    }
    return time 
  }

  const addWatchOnCLick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    if(cityInput.value === '' || UTCInput.value === '' || Number.isFinite(+UTCInput.value) === false) {
      return
    }
    const currentId = Math.random();
    const currentTime = new Date();
    setTime((prevTime): timeProps[] =>   {
      return [...prevTime, {
        hours: formatTime(currentTime.getHours() + Number(UTCInput.value)) < 10 ? '0' + (formatTime(currentTime.getHours() + Number(UTCInput.value))) : String(formatTime(currentTime.getHours() + Number(UTCInput.value))), 
        minutes: currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : String(currentTime.getMinutes()), 
        seconds:currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : String(currentTime.getSeconds()),
        city: cityInput.value,
        UTC: Number(UTCInput.value),
        id: String(currentId),
      }];
     
    });
    
 
    setUTCInput({value : ''});
    setCityInput({value : ''});
  }
  
  const cardProps = {
    cityInput: cityInput,
    UTCInput: UTCInput,
    UTCOnChange: UTCChangeHandler,
    cityOnChange: cityChangeHandler,
    addOnClick: addWatchOnCLick,
    time: time,
    deleteHandler: 
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
       
        setTime((): timeProps[] => {
          return time.filter((item) => +item.id !== +(e.target as HTMLButtonElement).id)
        })
      }
      
    
  }

  return (
    <div className={styles.container}>
      <Watches {...cardProps}/>
    </div>
  );
}