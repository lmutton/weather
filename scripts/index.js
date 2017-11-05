function showDate(){
  let date = new Date();
  let currentMonth = date.getMonth();
  let currentDate = date.getDate();
  let currentDay = date.getDay();
  let suffix = "";
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const days = [
    "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
  ];
  switch (currentDate) {
    case 1: case 21: case 31: suffix = "st"; break;
    case 2: case 22: suffix = "nd"; break;
    case 3: case 23: suffix = "rd"; break;
    default: suffix = "th";
  }
  document.querySelector('.date').textContent = days[currentDay] + ' ' + currentDate + suffix + ' ' + months[currentMonth];
}
showDate();
