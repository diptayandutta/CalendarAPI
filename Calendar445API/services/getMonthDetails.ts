import { months } from "../Constants/CalendarConstants";
import { monthI, WeekI } from "../models/Calendar.interface";
import {
  getDateOfWeek,
  getDatesInRange,
} from "./getDatesOfWeek";
import { weekCountOfQuarter } from "./getWeekCount";

function getLastDayOfYear(year) {
  return new Date(year, 11, 31);
}


const getWeekNumberFromDate = (date): number => {
  let oneJan: any = new Date(date.getFullYear(), 0, 1);
  let numberOfDays: any = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
  let result = Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
  return result;
};

export const getMonthDetails1 = (year: number): monthI[] => {
  let monthDetails: monthI[] = [];
  let totalNumberOfWeeksInYear = getWeekNumberFromDate(getLastDayOfYear(year));
  let monthCounter = 1;
  let totalWeekCounter = 1;

  for (let quarter = 0; quarter < 4; quarter++) {
    let weekCountOfQuarterArray = weekCountOfQuarter(year, monthCounter);
    for (let month = 1; month <= 3; month++) {
      let weekDetails: WeekI[] = [];

      for (let week = 1; week <= weekCountOfQuarterArray[month - 1]; week++) {
        let startAndEndDateOfWeek = getDateOfWeek(totalWeekCounter, year);
        let dates = getDatesInRange(
          new Date(startAndEndDateOfWeek.dateFrom.toISOString().split("T")[0]),
          new Date(startAndEndDateOfWeek.dateTo.toISOString().split("T")[0])
        );

        weekDetails[week-1] = {
          WeekNumber: week,
          Days: dates,
        };
        totalWeekCounter++;
      }
      monthDetails[monthCounter - 1] = {
        FiscalMonth: months[monthCounter - 1],
        NumberOfWeeks: weekCountOfQuarterArray[month - 1],
        Weeks: weekDetails,
      };
      monthCounter++;
    }
  }
  return monthDetails;
};
