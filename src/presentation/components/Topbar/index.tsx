import { Avatar, Badge, Toolbar } from '@mui/material';
import { useUi } from '@presentation/hooks/useUi';
import dark from '@presentation/styles/themes/dark';
import light from '@presentation/styles/themes/light';
import React from 'react';
import { MdDarkMode, MdLightMode, MdNotifications } from 'react-icons/md';
import IconButton from '../IconButton';
import Switch from '../Switch';
import { TopbarContainer } from './styles';

type TopbarProps = {};

const Topbar: React.FC<TopbarProps> = () => {
  const { theme, changeTheme } = useUi();
  return (
    <TopbarContainer position="sticky">
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <IconButton size="medium">
          <Badge badgeContent={17} color="error">
            <MdNotifications />
          </Badge>
        </IconButton>
        <Switch
          onClick={() => changeTheme(theme?.title === 'light' ? dark : light)}
          defaultChecked={theme?.title === 'dark'}
          icons={[<MdDarkMode />, <MdLightMode />]}
        />
        <IconButton size="small">
          <Avatar
            sx={{ width: '3rem', height: '3rem' }}
            alt="Goku"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0RWmiOoozUxvgNODFQ1_uy0CN8Qa-6a8asZ7513YkLTCUqaxxlJD3V0CihaMzAQfvpA&usqp=CAU"
          />
        </IconButton>
      </Toolbar>
    </TopbarContainer>
  );
};

export default Topbar;
