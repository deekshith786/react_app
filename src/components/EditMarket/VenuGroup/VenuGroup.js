import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const VenuGroupDialogBox = () => {
    
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Venu Group
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle><b>New Venu Group</b></DialogTitle>
        <DialogContent>
          <DialogContentText><b>Title</b></DialogContentText>
          <TextField margin="dense" label="Email Address" type="email" fullWidth variant="outlined"/>
          <DialogContentText><b>Photo</b></DialogContentText>
          <TextField margin="dense" label="photo" fullWidth variant="outlined"/>
          <input accept="image/*" id="upload-company-logo" type='file'  />              
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant = "contained">Cancel</Button>
          <Button onClick={handleClose} variant = "contained">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
