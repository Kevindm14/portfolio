import { Icon } from '@iconify/react';

export const IconsJS = {
  ReactJS: ({ ...props }) => {
    return <Icon icon="simple-icons:react" {...props} />;
  },
  NodeJS: ({ ...props }) => {
    return <Icon icon="fa6-brands:node" {...props} />;
  },
  JS: ({ ...props }) => {
    return <Icon icon="ri:javascript-fill" {...props} />;
  }
};
