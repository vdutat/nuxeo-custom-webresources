function richCalendarIsFutureDay(day) {
    var currentDate = new Date();
    rc = (currentDate.getTime() - day.date.getTime() < 0);
    console.log('<richCalendarIsFutureDay> ' + day.date.toString() + ', ' + rc);
    return rc;
}