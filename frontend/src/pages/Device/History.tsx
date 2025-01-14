import HistoryTable from "../../components/Tables/HistoryTable";
import DatePicker from "../../components/Calendar/Calendar";
import { useState } from "react";

type Props = {};

const History = (props: Props) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleDateSelect = (ranges: any) => {
    setSelectionRange({ ...ranges.selection });
  };

  return (
    <div className="w-full flex">
      <div className="w-[55%]">
        <HistoryTable />
      </div>
      <div className="px-8">
        <DatePicker onChange={handleDateSelect} range={selectionRange} />
      </div>
    </div>
  );
};

export default History;
