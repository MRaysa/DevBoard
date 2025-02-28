function DateYearFormation() {
  const date = new Date();
  const options = { month: "long", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function DayOfWeek() {
  const date = new Date();
  const options = { weekday: "short" };
  return date.toLocaleDateString("en-US", options);
}

function updateDateAndDay() {
  const dateContainer = document.getElementById("dateDaynamically");
  if (dateContainer) {
    const dayElement = dateContainer.querySelector("p");
    if (dayElement) {
      dayElement.textContent = `${DayOfWeek()} ,`;
    }

    const dateElement = dateContainer.querySelector("h2");
    if (dateElement) {
      dateElement.textContent = DateYearFormation();
    }
  }
}

updateDateAndDay();
