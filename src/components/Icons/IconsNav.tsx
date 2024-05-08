import { Icon } from '@iconify/react';

export const IconsNav = {
  Home: ({ ...props }) => {
    return <Icon icon="typcn:home" {...props} />;
  },
  About: ({ ...props }) => {
    return <Icon icon="mdi:about" {...props} />;
  },
  Contact: ({ ...props }) => {
    return <Icon icon="typcn:mail" {...props} />;
  },
  HamburguerMenu: ({ ...props }) => {
    return <Icon icon="mingcute:menu-fill" {...props} />;
  }
};