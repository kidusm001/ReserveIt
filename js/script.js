
const date=document.getElementsByClassName("Date-input");
date.addEventListener("click",flatpickr("input[type=datetime]", {minDate: "today"}));
