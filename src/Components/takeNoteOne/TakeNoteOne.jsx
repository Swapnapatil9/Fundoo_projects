import React from 'react'
import { Grid } from '@mui/material'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import "./TakeNoteOne.css"

function TakeNoteOne({showtoggle}) {
   
    return (
        <Grid container className='main-container1' style={{ width: "650px" }}>
            <Grid item className="grid-content" xs={12}>
                <Grid item xs={9} className='notes'>
                <input id='input' placeholder='Take a note...' onClick={showtoggle}></input>
                </Grid>
                <Grid item xs={1} className='new-list'>
                <CheckBoxOutlinedIcon id="icon">New List</CheckBoxOutlinedIcon>
                </Grid>
                <Grid item xs={1} className='new-note1'>
                <BrushOutlinedIcon id="icon">Note with Drawing</BrushOutlinedIcon>
                </Grid>
                <Grid item xs={1} className='new-note2'>
                <InsertPhotoOutlinedIcon id="icon">New Note with Image</InsertPhotoOutlinedIcon>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TakeNoteOne
