import { Icon } from '@iconify/react';

export const IconsLanguages = {
  Golang: ({ ...props }) => {
    return <Icon icon="fa6-brands:golang" {...props} />;
  },
  Ruby: ({ ...props }) => {
    return <Icon icon="ant-design:ruby-outlined" {...props} />;
  }
};