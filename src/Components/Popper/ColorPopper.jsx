import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';

function ColorPopper() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const [Col, setColor] = useState('')
  const changeColor=(color)=>{
console.log(color);
    // setColor(Col)
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const colors = ["#E9967A", "#EEE8AA", "#B8860B", "#BA55D3", "#CD5C5C", "#CD853F", "#DB7093", "#FF8C00"];

    return (
    <div>
      <ColorLensOutlinedIcon onClick={handleClick}/>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ display: 'flex', flexDirection: 'row', border: '3px solid whitesmoke', p: 1, bgcolor: 'white' }}>
          {
            colors.map((color) => {
              return <span onClick={()=>changeColor(color)} style={{ width: '30px',margin:'2px', borderRadius: '50%', height: '30px', backgroundColor:color}}></span>
            })
          }
        </Box>
      </Popper>
    </div>
  )
}

export default ColorPopper
