export const GetDatesOfWeek = (
  year: number,
  week: number,
  month: number
): string[] => {
  let firstDateOfMonth = new Date(year, month - 1, 1); // Date: year-month-01

  let firstDayOfMonth = firstDateOfMonth.getDay(); // 0 (Sun) to 6 (Sat)

  let firstDateOfWeek = new Date(firstDateOfMonth); // copy firstDateOfMonth

  firstDateOfWeek.setDate(
    // move the Date object
    firstDateOfWeek.getDate() + // forward by the number of
      (firstDayOfMonth ? 7 - firstDayOfMonth : 0) // days needed to go to
  ); // Sunday, if necessary
  console.log("//", firstDateOfWeek);

  firstDateOfWeek.setDate(
    // move the Date object
    firstDateOfWeek.getDate() + // forward by the number of
      7 * (week - 1) // weeks required (week - 1)
  );

  let dateNumbersOfMonthOnWeek = []; // output array of date #s
  let datesOfMonthOnWeek = []; // output array of Dates

  for (let i = 0; i < 7; i++) {
    // for seven days...

    dateNumbersOfMonthOnWeek.push(
      // push the date number on
      firstDateOfWeek.getDate()
    ); // the end of the array

    datesOfMonthOnWeek.push(
      // push the date object on
      new Date(+firstDateOfWeek)
    ); // the end of the array

    firstDateOfWeek.setDate(firstDateOfWeek.getDate() + 1); // move to the next day
  }
  return datesOfMonthOnWeek;
};


export function getDateOfWeek(week, y) {
  var d = new Date("Jan 01, " + y + " 01:00:00");
  var dayMs = (24 * 60 * 60 * 1000);
  var offSetTimeStart = dayMs * (d.getDay() - 1);
  var w = d.getTime() + 604800000 * (week - 1) - offSetTimeStart; //reducing the offset here
  var n1 = new Date(w);
  var n2 = new Date(w + 518400000);
  return {
    dateFrom: n1,
    dateTo: n2
  }
}

export function getDates(startDate, stopDate) {
  var dateArray = new Array();
  var currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(new Date(currentDate));
    currentDate = currentDate.setDate(new Date(currentDate).getDate() + 1);
  }
  return dateArray;
}

export function getDatesInRange(startDate, endDate) {
  const date = new Date(startDate.getTime());

  const dates = [];

  while (date <= endDate) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}
