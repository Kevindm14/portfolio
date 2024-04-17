import { Icon } from '@iconify-icon/react';

export const IconsJS = {
  ReactJS: ({ ...props }) => {
    return <Icon icon="logos:react" {...props} />;
  },
  NodeJS: ({ ...props }) => {
    return <Icon icon="fa6-brands:node" {...props} />;
  },
};
