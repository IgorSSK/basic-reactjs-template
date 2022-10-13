import React from 'react';
import { SidebarContainer } from './styles';
import useToggle from '@presentation/hooks/useToggle';
import { Divider } from '@mui/material';
import SidebarMenu from './SidebarMenu';
import SidebarHeader from './SidebarHeader';
import SidebarFooter from './SidebarFooter';
import { MenuItemType } from './SidebarMenu/MenuItem';

type SidebarProps = {
  menuItems: MenuItemType[];
};

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const [isOpen, toggle] = useToggle(true);

  return (
    <SidebarContainer variant="permanent" open={isOpen}>
      <SidebarHeader isSidebarOpen={isOpen} onSidebarToggle={toggle} />
      <Divider />
      <SidebarMenu items={menuItems} isSidebarOpen={isOpen} />
      <Divider />
      <SidebarFooter isSidebarOpen={isOpen} onExit={() => null} />
    </SidebarContainer>
  );
};

export default Sidebar;
