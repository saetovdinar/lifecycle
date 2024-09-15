import styles from './note.item.module.css'
import Button from './Button';


interface itemProps {
  children: string
  id: string
  delteHandler(): void
}
  export default function NoteItem({id, children, delteHandler}:itemProps ): JSX.Element {

  return (
    <div className={styles.container}>
    <div  className={styles.note_cont}>
      <div className={styles.description} >{children}</div>
      <Button deleteOnClick={delteHandler} id={id} styles={{position: 'absolute', top: '0', left: '350px'}}>X</Button>
    </div>
  </div>
    );
  }