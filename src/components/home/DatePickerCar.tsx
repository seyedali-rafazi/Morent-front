import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers";

interface DatePickerCarProps {
  status: string;
}

function DatePickerCar({ status }: DatePickerCarProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem label={status} sx={{ width: "100%", flexGrow: "1" }}>
        <MobileDatePicker label="Date" sx={{ width: "100%" }} />
      </DemoItem>
    </LocalizationProvider>
  );
}

export default DatePickerCar;
