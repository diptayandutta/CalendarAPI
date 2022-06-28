import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { yearI } from "./models/Calendar.interface";
import { GetDatesOfWeek } from "./services/getDatesOfWeek";
import { getMonthDetails1 } from "./services/getMonthDetails";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const year = req.headers.year;
  if (year) {
    let yearResponse: yearI = {
      FiscalYear: parseInt(year),
      Months: getMonthDetails1(parseInt(year)),
    };
    
    context.res = {
      
      body: {
        success: true,
        data: yearResponse,
      },
    };
  } else {
    context.res = {
      // status: 200, /* Defaults to 200 */
      body: {
        error: "Invalid year",
        success: false,
      },
    };
  }
};

export default httpTrigger;
