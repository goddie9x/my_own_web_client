import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import Button from '@mui/material/Button';
import LoginModal from './LoginModal.jsx';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: 'rgba(244, 244, 244, 0.9)',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3
};

export default function LoginInput({logo}) {
  const [openLoginModal, setOpenLoginModal] = React.useState(false);
  const handleOpenLoginModal = () => setOpenLoginModal(true);
  const handleCloseLoginModal = () => setOpenLoginModal(false);

  return (
    <div>
      <Button type="button" variant="outlined" onClick={handleOpenLoginModal} sx={{mx:3}}>
        Login
      </Button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={openLoginModal}
        onClose={handleCloseLoginModal}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <LoginModal logo={logo}/>
        </Box>
      </StyledModal>
    </div>
  );
}