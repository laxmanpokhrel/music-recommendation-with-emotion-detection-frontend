import { Button } from '@Atoms/common/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@Atoms/common/select';

function DashboardComponents() {
  consta;
  const a;
  return (
    <div className="naxatw-flex naxatw-flex-col">
      <div className="naxatw-p-10 naxatw-flex naxatw-gap-4">
        <Button>Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="link" size="lg">
          Link Button
        </Button>
      </div>
      <div className="naxatw-p-10 naxatw-flex naxatw-gap-4">
        <Select>
          <SelectTrigger className="naxatw-w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default DashboardComponents;
