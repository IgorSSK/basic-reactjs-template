import { AppDI } from '@main/factories/views/app';
import DefaultTemplate from '@presentation/templates/Default';
import { MdHomeFilled } from 'react-icons/md';

export const routes = [
  {
    id: 1,
    text: 'Home',
    path: '/',
    icon: MdHomeFilled,
    component: AppDI,
    layout: DefaultTemplate,
    private: false
  }
];
