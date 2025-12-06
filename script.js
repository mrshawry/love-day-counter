// 🌸 Important Dates for Aashi & Shaw
const loveStartDate = new Date("2023-10-07T23:00:00"); // Proposal / Relationship start date
const shawBirthday = new Date("2005-01-15T00:00:00"); // Shaw's birthday
const aashiBirthday = new Date("2005-12-07T00:00:00"); // Aashi's birthday

// 💖 Function to update all counters every second
function updateAllCounters() {
  const now = new Date();

  // Update Relationship Duration
  updateLoveDuration(now);

  // Update Next Anniversary Countdown
  updateNextAnniversary(now);

  // Update Shaw's Birthday Countdown
  updateBirthdayCountdown(now, shawBirthday, "shaw");

  // Update Aashi's Birthday Countdown
  updateBirthdayCountdown(now, aashiBirthday, "aashi");
}

// 💞 Function: Calculate Love Duration
function updateLoveDuration(now) {
  const difference = now - loveStartDate;

  // Calculate years
  const startYear = loveStartDate.getFullYear();
  const currentYear = now.getFullYear();
  let years = currentYear - startYear;

  // Adjust year if anniversary hasn’t occurred yet
  const tempDate = new Date(loveStartDate);
  tempDate.setFullYear(currentYear);
  if (now < tempDate) years--;

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update DOM
  document.getElementById("love-years").textContent = years;
  document.getElementById("love-days").textContent = days;
  document.getElementById("love-hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("love-minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("love-seconds").textContent = seconds.toString().padStart(2, "0");
}

// 🎉 Function: Calculate Next Anniversary Countdown
function updateNextAnniversary(now) {
  const nextAnniv = new Date(loveStartDate);
  nextAnniv.setFullYear(now.getFullYear());

  // If this year’s anniversary passed, move to next year
  if (now > nextAnniv) {
    nextAnniv.setFullYear(now.getFullYear() + 1);
  }

  const difference = nextAnniv - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update DOM
  document.getElementById("anniv-days").textContent = days;
  document.getElementById("anniv-hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("anniv-minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("anniv-seconds").textContent = seconds.toString().padStart(2, "0");
}

// 🎂 Function: Calculate Birthday Countdown
function updateBirthdayCountdown(now, birthday, prefix) {
  const nextBday = new Date(birthday);
  nextBday.setFullYear(now.getFullYear());

  // If birthday passed this year, set next year
  if (now > nextBday) {
    nextBday.setFullYear(now.getFullYear() + 1);
  }

  const difference = nextBday - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  // Update DOM elements dynamically
  document.getElementById(`${prefix}-days`).textContent = days;
  document.getElementById(`${prefix}-hours`).textContent = hours.toString().padStart(2, "0");
  document.getElementById(`${prefix}-minutes`).textContent = minutes.toString().padStart(2, "0");
}

// Initialize and refresh counters every second
updateAllCounters();
setInterval(updateAllCounters, 1000);
