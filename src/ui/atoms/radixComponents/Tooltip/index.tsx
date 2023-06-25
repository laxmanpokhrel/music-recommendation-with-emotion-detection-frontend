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
            <Icon iconName={iconName} className=" naxatw-text-gray-600  naxatw-font-light naxatw-text-xl " />
          </TooltipTrigger>
          <TooltipContent sideOffset={5}>
            <div className="message naxatw-bg-white naxatw-p-1 naxatw-rounded-lg naxatw-text-sm">{message}</div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
