import React from 'react';
import { MdCompost, MdHome } from 'react-icons/md';
import MenuItem, { MenuItemType } from './MenuItem';
import { SidebarMenuContainer } from './styles';

type SidebarMenuProps = {
  isSidebarOpen: boolean;
  items: MenuItemType[];
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isSidebarOpen, items }) => {
  return (
    <SidebarMenuContainer>
      {items.map(item => (
        <MenuItem key={item.id} isSidebarOpen={isSidebarOpen} item={item} />
      ))}
    </SidebarMenuContainer>
  );
};

export default SidebarMenu;
