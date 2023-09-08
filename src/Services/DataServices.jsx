import axios from 'axios'

const headerConfig = {
    headers: {
        Authorization: localStorage.getItem('token')
    }
}

export const createNote = async (obj) => {
    console.log(headerConfig)
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes", obj, headerConfig)
    return response
}

export const getNotes = async () => {
    let response = await axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList", headerConfig)
    return response
}

export const UpdateColor = async (obj) => {
    console.log("inside update color", obj);
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes", obj, headerConfig)
    return response
}
export const updateArchive = async (obj) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes", obj, headerConfig)
    return response
}
export const Deleting = async (obj) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes", obj, headerConfig)
    return response
}
export const PermanentDelete = async(obj) =>{
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/notes/notes_deleteForeverNotes",obj,headerConfig)
    return response
}