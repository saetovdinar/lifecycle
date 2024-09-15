import axios from 'axios';

const URL = 'http://localhost:7070/notes';
export async function getNotes() {
    const response = await axios.get(URL)
    
    return response.data
}

export async function addNotes(data: { content: string}) {
    await axios.post(URL, {

        content: data.content
    })
    
   
}

export async function deleteNotes(id: string) {
    await axios.delete(URL + '/' + id)
    
    
}