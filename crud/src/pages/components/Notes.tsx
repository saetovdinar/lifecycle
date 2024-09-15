import CreateNote from './CreateNote';
import NoteItem from './NoteItem';
import Title from './Title';
import styles from './notes.module.css';
import {textInputProp} from './App'
interface notesProps {
  notes: string[]
  text: textInputProp
  onChangeArea(): void
  addNote(): void
  deleteNote(): void
  refreshNote(): void
}




export default function Notes({notes, text, onChangeArea, addNote, deleteNote, refreshNote}: notesProps): JSX.Element {
  
    const createProps = {
      inputValue: text,
      onChangeHandler: onChangeArea,
      onClickHandler: addNote

    }

    return (

      <div className={styles.container}>
        <Title refreshOnClick={refreshNote}>Notes</Title>
        {
          notes.map((item, index: number)=> {
            return <NoteItem id={item.id} key={index} delteHandler={deleteNote}>{item.content}</NoteItem>
          })
        }
        <CreateNote {...createProps} />
      </div>

          
      
    );
  }