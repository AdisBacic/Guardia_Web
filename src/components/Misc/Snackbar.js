import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide'; // Importing Slide for animation

export default function LongTextSnackbar() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small">
        lorem ipsum dolorem
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Stack spacing={2} sx={{ width: '100%', maxWidth: '100vw' }}>
      {open && (
        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <SnackbarContent 
            message={
              <span style={{ flex: 1, textAlign: 'center' }}>
                [PDF-GUIDE] 16 sidor om effektiv nyckelhantering - kostnadsfritt!
              </span>
            }
            action={action}
            sx={{ 
              borderRadius: 0, 
              width: '100%', 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center' 
            }}
          />
        </Slide>
      )}
    </Stack>
  );
}
