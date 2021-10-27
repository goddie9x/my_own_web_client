import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Search() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: '1px', width: '25ch' },
        '& .css-c5v1qu-MuiInputBase-input-MuiFilledInput-input, & label':{color: '#fff'},
        '& .css-c5v1qu-MuiInputBase-input-MuiFilledInput-input':{background: 'rgba(255,255,255,.1)'}
      }}
      autoComplete="on"
    >
      <TextField id="standard-basic" label="Tìm kiếm" variant="filled" size="small" sx={{color:'#fff'}}/>
    </Box>
  );
}