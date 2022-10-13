import Button from '@mui/material/Button';
import IconButton from '@presentation/components/IconButton';
import React from 'react';
import { MdExitToApp } from 'react-icons/md';
import { SidebarFooterContainer } from './styles';

type SidebarFooterProps = {
  isSidebarOpen: boolean;
  onExit: () => void;
};

const SidebarFooter: React.FC<SidebarFooterProps> = ({ isSidebarOpen, onExit }) => (
  <SidebarFooterContainer>
    {isSidebarOpen ? (
      <Button
        onClick={onExit}
        size="large"
        startIcon={<MdExitToApp style={{ height: 24, width: 24 }} />}
        color="error"
        fullWidth
      >
        Sair
      </Button>
    ) : (
      <IconButton onClick={onExit} color="error">
        <MdExitToApp />
      </IconButton>
    )}
  </SidebarFooterContainer>
);

export default SidebarFooter;
