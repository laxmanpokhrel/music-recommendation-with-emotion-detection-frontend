import Icon from '@Atoms/Icon';
import { NavLink } from 'react-router-dom';

interface ISidebarTabProps {
  navigateTo: string;
  title?: string;
  iconName?: string;
}

/**
 * @returns `react-router-dom`'s  `<NavLink></NavLink>`
 */
export default function SidebarTab({ navigateTo, title = 'No Title', iconName = 'favorite' }: ISidebarTabProps) {
  return (
    <NavLink
      to={navigateTo}
      className="sidebar-tab naxatw-flex naxatw-gap-2 naxatw-items-center naxatw-justify-start naxatw-border naxatw-border-gray-100 naxatw-px-2 naxatw-py-1"
    >
      <Icon iconName={iconName} style="naxatw-text-lg" />
      <p className="sidebar-name">{title}</p>
    </NavLink>
  );
}
