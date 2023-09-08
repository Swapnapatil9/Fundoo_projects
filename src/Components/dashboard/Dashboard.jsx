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
    console.log('toggle called');
    setToggle(!istoggle)
  }

  //open close for menu icon
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    console.log('call Drawer');
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
    console.log('inside submit');
    const response = await createNote(data);
    console.log(response);
    setData(response);
  }

  //for fetching data
  const [info, setInfo] = useState([]);
  const [typeOfNotes, setTypeOfNotes] = useState("Notes");
  async function getData() {
    let response = await getNotes();
    let arr = response.data.data.data;
    // setInfo(response.data.data.data);
    // console.log(response.data.data.data);

    if (typeOfNotes === "Notes") {
      console.log("Type of notes is:", typeOfNotes);
      let newArray = arr.filter((data) => data.isArchived === false && data.isDeleted === false)
      setInfo(newArray)
    }
    else if (typeOfNotes === "Archive") {
      console.log("Type of notes is:", typeOfNotes);
      let newArray = arr.filter((data) => data.isArchived === true && data.isDeleted === false)
      setInfo(newArray)
    }
    else if (typeOfNotes === "Trash") {
      console.log("Type of notes is:", typeOfNotes);
      let newArray = arr.filter((data) => data.isArchived === false && data.isDeleted === true)
      setInfo(newArray)
    }
  }
  console.log(info);

  useEffect(() => {
    getData();
  }, [typeOfNotes])



  //for delete
  async function deleting(NoteId) {
    let note = { noteIdList: [NoteId], isDeleted: true }
    console.log("inside deleting", note);
    const response = await Deleting(note)
    getData()
    console.log(response);
  }

  //for Archive
  async function UpdateArchive(NoteId) {
    console.log("inside update Archive");
    let note = { noteIdList: [NoteId], isArchived: true }
    const response = await updateArchive(note)
    getData()
    console.log(response);
  }

  //for permanent delete
  async function permanentDeleting(NoteId) {
    let note = { noteIdList: [NoteId], isDeleted: false, isArchived: false }
    console.log("inside permanent delete", note);
    const response = await PermanentDelete(note)
    getData()
    console.log(response);
  }

  const [isDeleted, setIsDeleted] = useState(true)
  const typesOfDelete = () => {
    setIsDeleted(!isDeleted)
  }


  // {isDeleted ? deleting() :permanentDeleting()}

  // for logout
  const navigate = useNavigate();
  function handleLogout() {
    console.log("inside logout");
    localStorage.removeItem('token');
    // window.location.reload();
    navigate('/');

  }

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
                info.map((notes) => {return(
                  isDeleted ?
                    <GridView notes={notes} getData={getData} deleting={deleting} updateArchive={UpdateArchive} />
                    : <GridView notes={notes} getData={getData} updateArchive={UpdateArchive} permanentDeleting={permanentDeleting} />
                )}
                )}
            </div>
          ) : (
            <div className="list-view" >
              {
                info.map((notes) =>
                  <GridList notes={notes} getData={getData} deleting={deleting} updateArchive={UpdateArchive} permanentDeleting={permanentDeleting} />
                )}
            </div>
          )}
        </div>
      </div>
    </div>

  )
}

export default Dashboard


