function isDateInPast(day) {
	var currentDate = new Date();
	return (currentDate.getTime() - day.date.getTime() >= 0 && !isDateToday(day));
}

function isDateToday(day) {
	var currentDate = new Date();
	return (currentDate.getFullYear() == day.date.getFullYear() && currentDate.getMonth() == day.date.getMonth() && currentDate.getDate() == day.date.getDate());
}

function richCalendarIsFutureDay(day) {
    isInFuture = !isDateInPast(day);
    //console.log('<richCalendarIsFutureDay> ' + day.date.toString() + ', ' + isInFuture);
    return isInFuture;
}

function disabledClassesProv(day){
    rc = '';
    isInPast = isDateInPast(day);
    if (isInPast) {
    	rc = 'rf-cal-boundary-day';
    }
    //console.log('<disabledClassesProv> ' + day.date.toString() + ', ' + isInPast + ', ' + rc);
    return rc;
}
