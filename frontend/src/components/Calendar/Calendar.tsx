import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

type Props = {
  onChange?: any;
  range?: any;
};

const DatePicker = ({ onChange, range }: Props) => {
  return (
    <div className="py-4">
      <DateRangePicker onChange={onChange} ranges={[range]} />
      <div className="flex justify-center gap-4 mt-4"></div>
    </div>
  );
};

export default DatePicker;
