function getCurrentTime() {
  const currentDate = new Date();
  const hours = currentDate.getHours() % 12 || 12;
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const ampm = currentDate.getHours() >= 12 ? "PM" : "AM";
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

const completeButtons = document.querySelectorAll("#completedTaskBtn");

completeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = button.closest(".bg-\\[\\#F4F7FF\\]");
    const taskName = card.querySelector("h2").textContent;
    console.log(taskName);

    const taskCounterDecrease = document.getElementById("TaskCounterDecrease");
    console.log(taskCounterDecrease);
    let currentDecreaseCount = parseInt(taskCounterDecrease.textContent);
    if (currentDecreaseCount > 0) {
      taskCounterDecrease.textContent = currentDecreaseCount - 1;
    }

    const taskCounterIncrease = document.getElementById("taskCounter");
    console.log(taskCounterIncrease);
    let currentIncreaseCount = parseInt(taskCounterIncrease.textContent);
    taskCounterIncrease.textContent = currentIncreaseCount + 1;

    const activityLog = document.getElementById("activityLog");
    const activityLogInnerPart = document.createElement("p");
    activityLogInnerPart.className = "bg-[#F4F7FF] rounded-md p-2";
    activityLogInnerPart.textContent = `You have completed the task ${taskName} at ${getCurrentTime()}`;
    activityLog.appendChild(activityLogInnerPart);

    button.disabled = true;
    button.style.backgroundColor = "#9BA8F8";

    alert("Updated successfully");

    const remainingTasks = document.querySelectorAll(
      ".bg-\\[\\#F4F7FF\\] button:not([disabled])"
    );
    if (remainingTasks.length === 0) {
      alert("Congratulations, you have completed all the current tasks");
    }
  });
});

// chat History part
const clearHistoryBtn = document.getElementById("clearHistorybtn");
console.log(clearHistoryBtn);
clearHistoryBtn.addEventListener("click", function () {
  const activityLog = document.getElementById("activityLog");

  while (activityLog.firstChild) {
    activityLog.removeChild(activityLog.firstChild);
  }

  alert("Activity log cleared successfully");
});
