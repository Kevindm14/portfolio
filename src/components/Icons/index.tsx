import { Icon, IconProps } from '@iconify/react';


export const Icons = ({ icon, ...rest }: IconProps) => {
  return <Icon icon={icon} fontSize="5em" {...rest} />;
};

export default Icons;
