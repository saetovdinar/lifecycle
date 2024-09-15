import styles from './app.module.css';
import Notes from './Notes';
import { useState, useEffect } from 'react';
import { getNotes, addNotes, deleteNotes } from '@/api/ServerApi';


export interface textInputProp {
  value: string
}


export interface notesProp {
  description: string,
  id: number
}



export default function App(): JSX.Element {
  const [notes, setNotes] = useState<notesProp[]>([])
  
  
  useEffect( ()=> {
    getNotes()
  .then((response) => {
    setNotes(response)
    
  })
  }, [])
  


  const [textInput, setTectInput] = useState<textInputProp>({
    value: ''
  })
 
  
  const changeCreateNote = (e: React.ChangeEvent<HTMLTextAreaElement>): void  =>{
    setTectInput({value: e.target.value})
  }


  const addNoteOnCLick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  
    addNotes({
      content: textInput.value
    }).then(() =>{
      getNotes()
    .then((response) => {
      setNotes(response)

    })
    })
    
  }

  const deleteNoteOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  

    deleteNotes(event.target.id).then(()=> {
      getNotes()
      .then((response) => {
        setNotes(response)
    
      })
    })
   
  }


  const refreshNoteOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  

    
      getNotes()
      .then((response) => {
        setNotes(response)
        console.log(response)
      })

   
  }
  const notesProps = {
    notes: notes,
    text: textInput,
    onChangeArea: changeCreateNote,
    addNote: addNoteOnCLick,
    deleteNote: deleteNoteOnClick,
    refreshNote: refreshNoteOnClick
  }

  return (
    <div className={styles.container}>
     
      <Notes {...notesProps}  />
    </div>
  );
}