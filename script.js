function startMagic() {
    document.body.classList.add("show");
    document.querySelector("audio").play();
  
    // Show age container
    document.getElementById("ageContainer").style.display = "block";
  
    // Start age counter
    updateAge();
    setInterval(updateAge, 1000);
    startConfetti();
    createHearts();
  }
  
  
  // Confetti
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  let confetti = [];
  const colors = ['#0aafff','#47c1ff','#70d0ff','#b1e6fb','#d6f3ff','#0aff81','#47ffab','#70ffc1','#b1fbe0','#d6fff0','#ff0a2a','#ff4754','#ff707a','#fbb1b7','#ffd6d9'];
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  function createConfetti() {
    for (let i = 0; i < 150; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        radius: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 2
      });
    }
  }
  
  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
      c.y += c.speed;
      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });
  }
  
  function startConfetti() {
    createConfetti();
    setInterval(drawConfetti, 20);
  }
  
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  
  // Floating hearts
  function createHearts() {
    const heartContainer = document.querySelector(".hearts");
    setInterval(() => {
      const heart = document.createElement("div");
      heart.textContent = "💖💙";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.top = "100%";
      heart.style.fontSize = "20px";
      heart.style.animation = "floatUp 6s linear";
      heartContainer.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, 400);
  }
  
//   // Set your girlfriend's next birthday (YYYY, MM - 1, DD)
// const birthday = new Date(2025, 5, 23, 0, 0, 0); // May 12, 2025 at 00:00

// function updateCountdown() {
//   const now = new Date().getTime();
//   const distance = birthday - now;

//   if (distance < 0) {
//     document.getElementById("countdown").innerHTML = "🎉 It's her birthday today!";
//     return;
//   }

//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
//   const minutes = Math.floor((distance / (1000 * 60)) % 60);
//   const seconds = Math.floor((distance / 1000) % 60);

//   document.getElementById("days").textContent = days;
//   document.getElementById("hours").textContent = hours;
//   document.getElementById("minutes").textContent = minutes;
//   document.getElementById("seconds").textContent = seconds;
// }

// setInterval(updateCountdown, 1000);

function updateAge() {
    const birthDate = new Date(2006, 5, 23, 0, 0, 0); // May 12, 2004
    const now = new Date();
    const diff = now - birthDate;
  
    const totalSeconds = Math.floor(diff / 1000);
  
    const years = now.getFullYear() - birthDate.getFullYear();
    const months = now.getMonth() - birthDate.getMonth();
    const days = now.getDate() - birthDate.getDate();
  
    const fullYears = months < 0 || (months === 0 && days < 0) ? years - 1 : years;
  
    const ageDate = new Date(diff);
  
    const hours = ageDate.getUTCHours();
    const minutes = ageDate.getUTCMinutes();
    const seconds = ageDate.getUTCSeconds();
  
    document.getElementById("live-age").innerText =
      `${fullYears} years, ${months < 0 ? 12 + months : months} months, ` +
      `${days < 0 ? 30 + days : days} days, ` +
      `${hours} hrs, ${minutes} mins, ${seconds} secs`;
  }
  
  setInterval(updateAge, 1000);
  
