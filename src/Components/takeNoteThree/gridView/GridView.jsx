import React from 'react'
import { Grid } from '@mui/material'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import "./GridView.css"
import ColorPopper from '../../Popper/ColorPopper';

function GridView({ color, notes, deleting, updateArchive ,getData}){ 
    
    return (
        <Grid className='maincontainer2' style={{ width: "245px", backgroundColor: notes.color}}>

            <Grid container className='contents' spacing={2} >
                <Grid item xs={9} className='headline' style={{ textAlign: 'left' }}>
                    <div>{notes.title}</div>
                </Grid>
                <Grid item xs={3} className='pin-icon'>
                    <PushPinOutlinedIcon id="icon">pin note</PushPinOutlinedIcon>
                </Grid>

                <Grid item xs={12} className='take-note' style={{ textAlign: 'left',marginLeft:'5px' }}>
                    <div>{notes.description}</div>
                </Grid>

                <Grid item xs={12} className='miu-icons' style={{ textAlign: 'left',marginLeft:'5px'  }}>
                    <DoneOutlinedIcon />
                    <PersonAddAltOutlinedIcon />
                    <ColorPopper action='edit' getData={getData} NoteId={notes.id} color={color} />
                    <InsertPhotoOutlinedIcon />
                    <ArchiveOutlinedIcon NoteId={notes.id} getData={getData} onClick={()=>updateArchive(notes.id)}/>
                    <DeleteOutlinedIcon NoteId={notes.id} getData={getData} onClick={()=>deleting(notes.id)}/>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default GridView
