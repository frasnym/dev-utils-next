import type { NextPage } from "next";
import {
  getDaysOfYear,
  getLocalTimeZone,
  getRelativeTime,
  getTimezoneOffset,
  getWeeksOfYear,
} from "../../../../utils/date";
import { FormGroup } from "../../../ui/FormGroup";
import { Input } from "../../../ui/Input";
import { Label } from "../../../ui/Label";

interface UnixInputProps {
  localDate: string;
  gmtDate: string;
  unixInput: string;
}

const UnixInput: NextPage<UnixInputProps> = ({
  localDate,
  gmtDate,
  unixInput,
}) => {
  return (
    <div className="pt-5 flex flex-row justify-between">
      <div>
        <FormGroup>
          <Label>
            Local Time (GMT {getTimezoneOffset()} | {getLocalTimeZone()} )
          </Label>
          <Input value={localDate} withCopy={true} />
        </FormGroup>
        <FormGroup>
          <Label>GMT Time</Label>
          <Input value={gmtDate} withCopy={true} />
        </FormGroup>
        <FormGroup>
          <Label>Relative Time</Label>
          <Input value={getRelativeTime(parseInt(unixInput))} withCopy={true} />
        </FormGroup>
      </div>
      <div>
        <FormGroup>
          <Label>Day of Year</Label>
          <Input
            value={getDaysOfYear(new Date(parseInt(unixInput))).toString()}
            withCopy={true}
          />
        </FormGroup>
        <FormGroup>
          <Label>Week of Year</Label>
          <Input
            value={getWeeksOfYear(new Date(parseInt(unixInput))).toString()}
            withCopy={true}
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default UnixInput;
