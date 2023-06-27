import Icon from '@Atoms/Icon';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@Atoms/radixComponents/DropDownMenu';
import { NavLink } from 'react-router-dom';

interface NavDropdownMenuProps {
  name: string;
  subLink: { link: string; name: string }[];
}

export default function NavDropdownMenu({ name, subLink }: NavDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-0 items-center hover:text-teal-600">
          <p className="button  font-bold"> {name} </p>
          <Icon iconName="arrow_drop_down" className="" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        {subLink.map((option) => (
          <DropdownMenuItem key={option.name}>
            <NavLink to={option.link} className="body-lg">
              <p>{option.name}</p>
            </NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
