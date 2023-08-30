"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import TakeNoteOne from '../takeNoteOne/TakeNoteOne';
import TakeNoteTwo from '../takeNoteTwo/TakeNoteTwo';
import MiniDrawer from '../miniBar/MiniDrawer';
import { Deleting, createNote, getNotes } from '../../Services/DataServices';
import GridView from '../takeNoteThree/gridView/GridView'
import GridList from '../takeNoteThree/gridList/GridList'
import NavBar from '../NavBar/NavBar';
import { UpdateColor } from '../../Services/DataServices';
import { updateArchive } from '../../Services/DataServices';
import './DashBoard.css'

function Dashboard() {
  const [istoggle, setToggle] = useState(true);
  const showtoggle = () => {
    console.log('toggle called');
    setToggle(!istoggle)
  }

  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    console.log('call Drawer');
    setOpen(!open)
  }

  const [gridFlex, setgridFlex] = React.useState(true);
  const ChangeFlex = () => {
    setgridFlex(!gridFlex);
  };

  const [data, setData] = useState("")
  async function Submit() {
    console.log('inside submit');
    const response = await createNote(data);
    console.log(response);
    setData(response);
  }


  const [info, setInfo] = useState([]);
  const [typeOfNotes, setTypeOfNotes] = useState("Notes");
  async function getData() {
    const response = await getNotes();
    console.log(response);
    setInfo(response.data.data.data);
    console.log(response.data.data.data);
 
  if(typeOfNotes==="Notes"){
    const newArray = info.filter((data)=>data.isArchive===false && data.isDeleted===false)
    setTypeOfNotes(newArray)
  }else if(typeOfNotes==="Archieve"){
    const newArray = info.filter((data)=>data.isArchive===true && data.isDeleted===false)
    setTypeOfNotes(newArray)
  }else if(typeOfNotes==="Delete"){
    const newArray = info.filter((data)=>data.isArchive===false && data.isDeleted===true)
    setTypeOfNotes(newArray)
  }
  }

  useEffect(() => {
    getData();
  },[])

  async function deleting(){
    const response = await Deleting(data)
    console.log(response);
    setInfo(response.data.data.data);
    console.log(response.data.data.data);
  }

  async function UpdateArchive(){
    const response = await updateArchive(data)
    console.log(response);
    setInfo(response.data.data.data);
    console.log(response.data.data.data);
  }

  return (
    <div>

      <NavBar handleDrawer={handleDrawer} ChangeFlex={ChangeFlex} />
      <MiniDrawer open={open} />

      {istoggle ? <TakeNoteOne showtoggle={showtoggle} /> : <TakeNoteTwo showtoggle={showtoggle} Submit={Submit} />}
      <div className='toggle-grid'>
        {gridFlex ? (
          <div className="grid-view">
            {
              info.map((notes) =>
                <GridView notes={notes} />
              )}
          </div>
        ) : (
          <div className="list-view" >
            {
              info.map((notes) =>
                <GridList notes={notes} />
              )}
          </div>
        )}
      </div>

    </div>

  )
}

export default Dashboard
