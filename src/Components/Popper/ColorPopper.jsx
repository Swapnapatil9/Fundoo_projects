import React from 'react'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { UpdateColor } from '../../Services/DataServices';

function ColorPopper({NoteId, action, setData, getData}) {

  const colors = ["#EEE8AA", "#E9967A", "#bfff00", "#B8860B", "#BA55D3", "#CD5C5C", "#CD853F", "#DB7093", "#FF8C00"];

  async function changeColor(color){

    if (action === 'create') {
        console.log("Inside takenote2");
        console.log(color);
        setData((prevState) => ({ ...prevState, color: color }))
    } 
    else if (action === 'edit') {
        console.log("Inside takenote3");
        let note = { noteIdList: [NoteId], color: color }
        let cardColor = note.color
        console.log(cardColor);
        let response = await UpdateColor(note);
        getData()
        console.log(response);
    }

}

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
 
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <ColorLensOutlinedIcon onClick={handleClick} />

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ display: 'flex', flexDirection: 'row', border: '3px solid whitesmoke', p: 1, bgcolor: 'white' }}>
          {
            colors.map((color) => {
              return <span onClick={() => changeColor(color)} style={{ width: '30px', margin: '2px', borderRadius: '50%', height: '30px', backgroundColor: color }}></span>
            })
          }
        </Box>
      </Popper>
    </div>
  )
}

export default ColorPopper
