import React from 'react'
import { Grid } from '@mui/material'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import "./GridList.css"
import ColorPopper from '../../Popper/ColorPopper';

function GridList({ color, notes, changeColor}) {
  return (
    <Grid container className='main-container2' style={{ width: "600px", backgroundColor:{color}  }}>

      <Grid container className='contents' spacing={2} >
        <Grid item xs={11} className='headline' style={{ textAlign: 'left' }}>
          <div>{notes.title}</div>
        </Grid>
        <Grid item xs={1} className='pin-icon'>
          <PushPinOutlinedIcon id="icon">pin note</PushPinOutlinedIcon>
        </Grid>

        <Grid item xs={12} className='take-note' style={{ textAlign: 'left' }}>
          <div>{notes.description}</div>
        </Grid>

        <Grid item xs={5} className='miu-icons' style={{ textAlign: 'left', paddingRight: '5px' }}>
          <DoneOutlinedIcon />
          <PersonAddAltOutlinedIcon />
          <ColorPopper color={color} />
          <InsertPhotoOutlinedIcon />
          <ArchiveOutlinedIcon />
          <DeleteOutlinedIcon />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default GridList
