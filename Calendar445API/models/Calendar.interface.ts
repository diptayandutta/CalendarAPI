export interface WeekI {
  WeekNumber: number;
  Days: string[];
}

export interface monthI {
  FiscalMonth: string;
  NumberOfWeeks: number;
  Weeks: WeekI[];
}

export interface yearI {
  FiscalYear: number;
  Months: monthI[];
}
