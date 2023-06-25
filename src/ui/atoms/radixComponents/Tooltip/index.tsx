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
            <Icon iconName={iconName} className=" laxutw-text-gray-600  laxutw-font-light laxutw-text-xl " />
          </TooltipTrigger>
          <TooltipContent sideOffset={5}>
            <div className="message laxutw-bg-white laxutw-p-1 laxutw-rounded-lg laxutw-text-sm">{message}</div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
