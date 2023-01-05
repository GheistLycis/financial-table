import BaseDTO from "src/common/BaseDTO";
import MonthDTO from "../month/Month.dto";

export default interface MonthlyEntryDTO extends BaseDTO {
  value: number
  description?: string
  month: MonthDTO
}