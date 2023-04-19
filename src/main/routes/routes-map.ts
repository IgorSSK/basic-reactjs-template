import { AppDI } from '@main/factories/views/app';
import { CreateUserDI } from '@main/factories/views/user/create';
import DefaultTemplate from '@presentation/templates/Default';
import { MdHomeFilled, MdPerson, MdPersonAdd } from 'react-icons/md';

export const routes = [
  {
    id: 1,
    text: 'Home',
    path: '/',
    icon: MdHomeFilled,
    component: AppDI,
    layout: DefaultTemplate,
    private: false
  },
  {
    id: 2,
    text: 'User',
    path: '/user',
    icon: MdPerson,
    component: null,
    layout: DefaultTemplate,
    private: false,
    children: [
      {
        id: 2.1,
        text: 'Create',
        path: '/create',
        icon: MdPersonAdd,
        component: CreateUserDI,
        layout: DefaultTemplate,
        private: false
      }
    ]
  }
];
