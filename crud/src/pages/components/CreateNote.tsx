import styles from './create.note.module.css'
import ButtonCreate from './ButtonCreate';

interface createProps {
  inputValue: { value: string}
  onChangeHandler(): void
  onClickHandler(): void
}

export default function CreateNote({inputValue, onChangeHandler, onClickHandler}: createProps  ): JSX.Element {


    return (
      <div className={styles.container}>
        <div className={styles.title}>New Note</div>
        <div  className={styles.note_cont}>
          <textarea 
          
          onChange={onChangeHandler} 
          value={inputValue.value} 
          className={styles.input} >

          </textarea>
          <ButtonCreate addHendler={onClickHandler } styles={{position: 'absolute', bottom: '10px', left: '350px'}}>send</ButtonCreate>
        </div>
      </div>
    );
  }