const roastList = [
    "That squat depth? Might as well have stayed standing.",
    "Your deadlift looked like a question mark.",
    "Nice form... if you're lifting ghosts.",
    "I've seen toddlers with better bench stability.",
    "You call that a pump? My grandma curls more.",
    "Are those biceps or baguettes?",
    "That bench press was more of a bounce.",
    "Your ROM is on vacation."
  ];
  
  const motivationQuotes = [
    "Push yourself. No one else will.",
    "You don’t get the body you wish for. You get the body you work for.",
    "Stay consistent. Results take time.",
    "Weakness is a choice. Strength is discipline.",
    "Grind now, glory later."
  ];
  
  const roastEl = document.getElementById("dailyRoast");
  const toggleBtn = document.getElementById("toggleQuote");
  const topRoastEl = document.getElementById("topRoast");
  let isRoastMode = true;
  
  const roasts = JSON.parse(localStorage.getItem("roasts")) || [];
  const workouts = JSON.parse(localStorage.getItem("workouts")) || [];
  
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  
  function updateQuote() {
    roastEl.textContent = isRoastMode ? pickRandom(roastList) : pickRandom(motivationQuotes);
    toggleBtn.textContent = isRoastMode ? "Show Motivation" : "Show Roast";
  }
  
  function getTopRoast() {
    if (roasts.length === 0) return "No roasts yet!";
    const longest = roasts.reduce((a, b) => (a.text.length > b.text.length ? a : b));
    return longest.text;
  }
  
  if (roastEl) {
    updateQuote();
    if (topRoastEl) topRoastEl.textContent = getTopRoast();
  }
  
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      isRoastMode = !isRoastMode;
      updateQuote();
    });
  }
  
  const form = document.getElementById("workoutForm");
  const feed = document.getElementById("workoutFeed");
  
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const muscle = document.getElementById("muscleGroup").value;
      const sets = document.getElementById("sets").value;
      const reps = document.getElementById("reps").value;
      const notes = document.getElementById("notes").value;
  
      const workout = {
        muscle,
        sets,
        reps,
        notes,
        time: new Date().toLocaleTimeString()
      };
  
      workouts.unshift(workout);
      localStorage.setItem("workouts", JSON.stringify(workouts));
      updateFeed();
      form.reset();
    });
  
    updateFeed();
  }
  
  function updateFeed() {
    feed.innerHTML = "";
    workouts.forEach(w => {
      const div = document.createElement("div");
      div.classList.add("roast-card");
      div.innerHTML = `<strong>${w.time}</strong> - ${w.muscle}: ${w.sets} sets x ${w.reps} reps <br><em>${w.notes}</em>`;
      feed.appendChild(div);
    });
  }
  
  const roastForm = document.getElementById("roastForm");
  const roastInput = document.getElementById("roastInput");
  const roastFeed = document.getElementById("roastFeed");
  
  if (roastForm && roastInput && roastFeed) {
    roastForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const text = roastInput.value.trim();
      if (text.length === 0) return;
  
      const roast = {
        text,
        time: new Date().toLocaleTimeString(),
      };
  
      roasts.unshift(roast);
      localStorage.setItem("roasts", JSON.stringify(roasts));
      roastInput.value = "";
      displayRoasts();
      if (topRoastEl) topRoastEl.textContent = getTopRoast();
    });
  
    displayRoasts();
  }
  
  function displayRoasts() {
    roastFeed.innerHTML = "<h2>🔥 Latest Roasts</h2>";
    roasts.forEach(r => {
      const div = document.createElement("div");
      div.classList.add("roast-card");
      div.textContent = `${r.time} — ${r.text}`;
      roastFeed.appendChild(div);
    });
  }
  
  const toggleThemeBtn = document.getElementById("toggleTheme");
  if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }
  