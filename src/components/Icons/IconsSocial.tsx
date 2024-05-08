import { Icon } from '@iconify/react';

export const SocialIcons = {
  LinkedIn: ({ ...props }) => {
    return <Icon icon="flowbite:linkedin-solid" {...props} />;
  },
  Github: ({ ...props }) => {
    return <Icon icon="mingcute:github-fill" {...props} />;
  },
  Twitter: ({ ...props }) => {
    return <Icon icon="prime:twitter" {...props} />;
  },
};