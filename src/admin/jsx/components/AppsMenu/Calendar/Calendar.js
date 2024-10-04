import React from "react";

import EventCalendar from "./EventCalendar";

import PageTitle from "../../../layouts/PageTitle";

const Calendar = () => {
   return (
      <div className="h-80">
         <PageTitle activeMenu="Календар" motherMenu="Курьерный стол" />

         <EventCalendar />
      </div>
   );
};

export default Calendar;
