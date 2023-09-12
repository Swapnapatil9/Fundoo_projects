"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import TakeNoteOne from '../takeNoteOne/TakeNoteOne';
import TakeNoteTwo from '../takeNoteTwo/TakeNoteTwo';
import MiniDrawer from '../miniBar/MiniDrawer';
import { createNote, getNotes, updateArchive, Deleting, PermanentDelete } from '../../Services/DataServices';
import GridView from '../takeNoteThree/gridView/GridView'
import GridList from '../takeNoteThree/gridList/GridList'
import NavBar from '../NavBar/NavBar';
import './DashBoard.css'
import { useNavigate } from "react-router-dom"

function Dashboard() {
  //toggled for takenote1 and takenote2
  const [istoggle, setToggle] = useState(true);
  const showtoggle = () => {
    // //.log('toggle called');
    setToggle(!istoggle)
  }

  //open close for menu icon
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    //.log('call Drawer');
    setOpen(!open)
  }

  //change the flex view
  const [gridFlex, setgridFlex] = React.useState(true);
  const ChangeFlex = () => {
    setgridFlex(!gridFlex);
  };

  //for create data
  const [data, setData] = useState("")
  async function Submit() {
    //.log('inside submit');
    const response = await createNote(data);
    //.log(response);
    setData(response);
  }

  //for fetching data
  const [info, setInfo] = useState([]);
  const [typeOfNotes, setTypeOfNotes] = useState("Notes");
  async function getData() {
    let response = await getNotes();
    let arr = response.data.data.data;
    setInfo(response.data.data.data);
    // //.log(response.data.data.data);

    if (typeOfNotes === "Notes") {
      //.log("Type of notes is:", typeOfNotes);
      let newArray = arr.filter((data) => data.isArchived === false && data.isDeleted === false)
      setInfo(newArray)
    }
    else if (typeOfNotes === "Archive") {
      //.log("Type of notes is:", typeOfNotes);
      let newArray = arr.filter((data) => data.isArchived === true && data.isDeleted === false)
      setInfo(newArray)
    }
    else if (typeOfNotes === "Trash") {
      //.log("Type of notes in trash is:", typeOfNotes, arr);
      let newArray = arr.filter((data) => data.isArchived === true && data.isDeleted === true)
      //.log("trash notes", newArray);
      setInfo(newArray)
    }
  }
  //.log(info);

  useEffect(() => {
    getData();
  }, [typeOfNotes])



  //for delete
  async function deleting(noteId) {
    let note = { noteIdList: [noteId], isArchived: false, isDeleted: true }
    //.log("inside deleting", note);
    const response = await Deleting(note)
    getData()
    console.log(response);
  }

  //for Archive
  async function UpdateArchive(noteId) {
    //.log("inside update Archive");
    let note = { noteIdList: [noteId], isArchived: true, isDeleted: false }
    const response = await updateArchive(note)
    getData()
    console.log(response);
  }

  //for permanent delete
  async function permanentDeleting(NoteId) {
    let note = { noteIdList: [NoteId] }
    //.log("inside permanent delete", note);
    const response = await PermanentDelete(note)
    getData()
    console.log(response);
  }


  const dataDeleting = (id) => {
    //.log("inside dataDeleting type of notes is:", typeOfNotes, id,data.isArchived);

    (typeOfNotes === 'Trash') ? permanentDeleting(id) : deleting(id)
  }

  // for logout
  const navigate = useNavigate();
  function handleLogout() {
    //.log("inside logout");
    localStorage.removeItem('token');
    // window.location.reload();
    navigate('/');

  }
  // //.log("info",info);
  return (
    <div className='dashboard-container'>

      <NavBar handleDrawer={handleDrawer} ChangeFlex={ChangeFlex} handleLogout={handleLogout} />
      <MiniDrawer open={open} getData={getData} setTypeOfNotes={setTypeOfNotes} />

      <div className='middle-container'>
        <div className='toggle-takenotes'>
          {istoggle ? <TakeNoteOne showtoggle={showtoggle} /> : <TakeNoteTwo showtoggle={showtoggle} Submit={Submit} getData={getData} />}
        </div>

        <div className='toggle-grid'>
          {gridFlex ? (
            <div className="grid-view">
              {
                info.map((notes) =>
                  <GridView notes={notes} getData={getData} updateArchive={UpdateArchive} dataDeleting={dataDeleting} />
                )}
            </div>
          ) : (
            <div className="list-view" >
              {
                info.map((notes) =>
                  <GridList notes={notes} getData={getData} updateArchive={UpdateArchive} dataDeleting={dataDeleting} />
                )}
            </div>
          )}
        </div>
      </div>
    </div>

  )
}

export default Dashboard


