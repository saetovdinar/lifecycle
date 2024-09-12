import styles from './app.module.css';
import Watches from './Watches';


export default function App(): JSX.Element {
  
  const cardProps = {

    title: 'Card title',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    btn_descr: 'Go somewhere',
  }

  return (
    <div className={styles.container}>
      <Watches {...cardProps}/>
    </div>
  );
}