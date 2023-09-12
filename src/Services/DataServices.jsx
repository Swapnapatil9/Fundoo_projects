import axios from 'axios'

let headerConfig 
function checkToken() {
    return headerConfig={
    headers: {
        Authorization: localStorage.getItem('token')
    }}
}

export const createNote = async (obj) => {
    console.log(headerConfig)
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes", obj, checkToken())
    return response
}

export const getNotes = async () => {
    let response = await axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList", checkToken())
    return response
}

export const UpdateColor = async (obj) => {
    console.log("inside update color", obj);
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes", obj, checkToken())
    return response
}
export const updateArchive = async (obj) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes", obj, checkToken())
    return response
}
export const Deleting = async (obj) => {
    console.log("inside deleting API",obj);
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes", obj, checkToken())
    return response
}
export const PermanentDelete = async(notes) =>{
    console.log("inside permanent deleting API",notes);
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/deleteForeverNotes",notes,checkToken())
    return response
}