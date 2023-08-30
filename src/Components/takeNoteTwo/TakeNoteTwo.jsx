import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import "./TakeNoteTwo.css"
import { createNote } from '../../Services/DataServices';
import ColorPopper from '../Popper/ColorPopper';


function TakeNoteTwo({ color, showtoggle }) {
    const [data, setData] = useState({ title: "", Description: "", color: "", isArchived: false });

    const setTitle = (e) => {
        setData({ ...data, title: e.target.value })
    }
    const setDiscription = (e) => {
        setData({ ...data, description: e.target.value })
    }
    const createArchive = () => {
        setData((prevState) => ({ ...prevState, isArchived: true }))
    }
    const Submit = async () => {
        let response = await createNote(data)
        console.log(response)
    }

    return (
        <div>
            <Grid container className='main-container' style={{ width: "650px" }}>
                <Grid container className='main-contents' spacing={2} >

                    <Grid item xs={12} className='top-content'>
                        <Grid item className='title-text'>
                            <input type='text' placeholder='Title' onChange={setTitle}></input>
                        </Grid>
                        <Grid item className='pin-icon'>
                            <PushPinOutlinedIcon id="icon">pin note</PushPinOutlinedIcon>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} className='description-text'>
                        <textarea type='text' placeholder='Take a note...' onChange={setDiscription} cols={50} rows={3}></textarea>
                    </Grid>

                    <Grid item className='bottom-content'>
                        <Grid item xs={6} className='miu-icons'>
                            <AddAlertOutlinedIcon />
                            <PersonAddAltOutlinedIcon />
                            <ColorPopper color={color} />
                            <InsertPhotoOutlinedIcon />
                            <ArchiveOutlinedIcon onClick={createArchive} />
                            <DeleteOutlinedIcon />
                        </Grid>
                        <Grid item xs={6} className='close-button'>
                            <button id='submit-button' onClick={() => {
                                showtoggle();
                                Submit();
                            }
                            }>Close</button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default TakeNoteTwo
