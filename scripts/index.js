const timeFrameForm = document.querySelector('#timeframeSelector');

function createTimeDisplay(activity, timeSpent, timeSpan) {
  const previousTimeSpentPrefixes = {
    daily: 'Yesterday',
    weekly: 'Last Week',
    monthly: 'Last Month',
  };

  const template = document.createElement('template');
  const displayElementId = activity.replace(' ', '-').toLowerCase();

  const timeDisplayHtml = `
    <div class="time-display" id="${displayElementId}">
      <img class="time-display__above-header"
        src="images/icon-${displayElementId}.svg"
        alt="${activity} icon"
        >
      <div class="wrapper" tabindex="0">
        <header class="time-display__header">
          <h4>${activity}</h4>
          <button class="btn extra-menu">
            <img src="images/icon-ellipsis.svg" alt="three dots">
          </button>
        </header>
        <span class="time-display__content">${timeSpent.current}hrs</span>
        <footer class="time-display__footer">
          ${previousTimeSpentPrefixes[timeSpan]} - ${timeSpent.previous}hrs
        </footer>
      </div>
    </div>
  `;

  template.innerHTML = timeDisplayHtml.trim();

  return template.content.firstChild;
}

function getCurrentTimeframe() {
  let formData = new FormData(timeFrameForm);
  return formData.get('timeframe');
}

async function fetchSpentTime() {
  const dashboard = document.querySelector('#dashboardContent');
  const currentTimeframe = getCurrentTimeframe();

  const req = await fetch('data.json');
  const spentTime = await req.json();

  dashboard.innerHTML = '';

  for (const time of spentTime) {
    dashboard.appendChild(
      createTimeDisplay(
        time.title,
        time.timeframes[currentTimeframe],
        currentTimeframe
      )
    );
  }
}

timeFrameForm.addEventListener('change', fetchSpentTime);

fetchSpentTime();
