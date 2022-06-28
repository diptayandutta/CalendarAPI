export function sundays(year, month) {
  var day, counter, date;

  day = 1;
  counter = 0;
  date = new Date(year, month, day);
  while (date.getMonth() === month) {
    if (date.getDay() === 0) {
      // Sun=0, Mon=1, Tue=2, etc.
      counter += 1;
    }
    day += 1;
    date = new Date(year, month, day);
  }
  return counter;
}

export function saturdays(year, month) {
  var day, counter, date;

  day = 1;
  counter = 0;
  date = new Date(year, month, day);
  while (date.getMonth() === month) {
    if (date.getDay() === 6) {
      // Sun=0, Mon=1, Tue=2, etc.
      counter += 1;
    }
    day += 1;
    date = new Date(year, month, day);
  }
  return counter;
}

export function weekCount(year, month_number): number {
  // month_number is in the range 1..12

  let noOfSundays = sundays(year, month_number - 1);
  let noOfSaturdays = saturdays(year, month_number - 1);

  let weekCount = noOfSundays;
  if (noOfSundays < noOfSaturdays) {
    weekCount = noOfSaturdays;
  }

  return weekCount;
}

export function weekCountOfQuarter(year, month_number): number[] {
  let weekCountOfQuarter: number[] = [];
  let weekCounter = 0;
  for (let i = month_number; i < month_number + 3; i++) {
    let weekCountOfMonth = weekCount(year, i);
    if (i > month_number) {
      if (weekCountOfQuarter.includes(5)) {
        weekCountOfQuarter[weekCounter] = 4;
      } else {
        weekCountOfQuarter[weekCounter] = weekCountOfMonth;
      }
    } else {
      weekCountOfQuarter[weekCounter] = weekCountOfMonth;
    }
    weekCounter++;
  }

  return weekCountOfQuarter;
}
