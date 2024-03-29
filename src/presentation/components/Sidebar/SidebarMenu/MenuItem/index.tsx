import React, { useCallback, useEffect } from 'react';
import Collapse from '@mui/material/Collapse';
import Menu from '@mui/material/Menu';
import useToggle from '@presentation/hooks/useToggle';
import { IconType } from 'react-icons';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  MenuItemButton,
  MenuItemContainer,
  MenuItemIcon,
  MenuItemSubmenu,
  MenuItemText
} from './styles';

export type MenuItemType = {
  id: string | number;
  text: string;
  path: string;
  icon?: IconType;
  children?: MenuItemType[];
};

type MenuItemProps = {
  isSidebarOpen: boolean;
  item: MenuItemType;
};

type SelectEventType = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

type MenuItemComponent = MenuItemProps & {
  onSelectItem: SelectEventType;
  isChieldOpen?: boolean;
  subitem?: boolean;
  selected?: boolean;
};

const MenuItemComponent: React.FC<MenuItemComponent> = ({
  isSidebarOpen,
  item,
  onSelectItem,
  isChieldOpen,
  subitem,
  selected
}) => (
  <MenuItemContainer isSidebarOpen={isSidebarOpen} disablePadding>
    <MenuItemButton
      id={String(item.id)}
      isNavOpen={isSidebarOpen}
      selected={selected}
      onClick={onSelectItem}
      subItem={subitem}
    >
      {item.icon && (
        <MenuItemIcon>
          <item.icon />
        </MenuItemIcon>
      )}
      <MenuItemText primary={item.text} />
      {item.children && (isChieldOpen ? <MdExpandLess /> : <MdExpandMore />)}
    </MenuItemButton>
  </MenuItemContainer>
);

const MenuItem: React.FC<MenuItemProps> = ({ isSidebarOpen, item }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isOpen, toggle, reset] = useToggle(false);
  const location = useLocation();
  const navigate = useNavigate();
  const subItem = {
    collapse: {
      component: Collapse,
      props: {
        in: isOpen,
        timeout: 'auto',
        unmountOnExit: true
      }
    },
    menu: {
      component: MenuItemSubmenu,
      props: {
        anchorEl: anchorEl,
        open: isOpen,
        onClose: toggle,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left'
        }
      }
    }
  };

  const current = isSidebarOpen ? subItem.collapse : subItem.menu;

  const handleSelect: SelectEventType = useCallback(
    e => {
      const itemSelected =
        String(item.id) === e.currentTarget.id
          ? item
          : item.children?.find(x => String(x.id) === e.currentTarget.id);

      if (!itemSelected) return;

      if (itemSelected.children) {
        setAnchorEl(e.currentTarget);
        toggle();
        return;
      }
      const path = item.children ? item.path + itemSelected.path : itemSelected.path;

      navigate(path);
    },
    [setAnchorEl, toggle, item]
  );

  useEffect(() => reset(), [isSidebarOpen]);

  return (
    <React.Fragment>
      <MenuItemComponent
        isSidebarOpen={isSidebarOpen}
        item={item}
        isChieldOpen={isOpen}
        onSelectItem={handleSelect}
        selected={location.pathname === item.path}
      />
      {item.children && (
        <current.component {...current.props}>
          {item.children.map(chield => (
            <MenuItemComponent
              key={chield.id}
              isSidebarOpen={isSidebarOpen}
              item={chield}
              onSelectItem={handleSelect}
              selected={location.pathname === item.path + chield.path}
              subitem
            />
          ))}
        </current.component>
      )}
    </React.Fragment>
  );
};

export default MenuItem;
