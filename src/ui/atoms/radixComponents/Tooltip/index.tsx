import Icon from '@Atoms/Icon';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

interface ToolTipProps {
  iconName: string;
  message: string;
}

export default function ToolTip({ iconName, message }: ToolTipProps) {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Icon iconName={iconName} className=" text-gray-600  font-light text-xl " />
          </TooltipTrigger>
          <TooltipContent sideOffset={5}>
            <div className="message bg-white p-1 rounded-lg text-sm">{message}</div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
