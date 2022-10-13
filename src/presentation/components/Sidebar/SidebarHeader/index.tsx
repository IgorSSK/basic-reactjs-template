import React from 'react';
import Text from '@presentation/components/Text';
import { MdChevronLeft, MdMenu } from 'react-icons/md';
import { SidebarHeaderContainer } from './styles';
import IconButton from '@presentation/components/IconButton';

type SidebarHeaderProps = {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
};

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ isSidebarOpen, onSidebarToggle }) => (
  <SidebarHeaderContainer isSidebarOpen={isSidebarOpen}>
    <img src="public/vite.svg" alt="Main Logo" />
    <Text variant="h6">React Template</Text>
    <IconButton onClick={onSidebarToggle}>
      {isSidebarOpen ? <MdChevronLeft /> : <MdMenu />}
    </IconButton>
  </SidebarHeaderContainer>
);

export default SidebarHeader;
