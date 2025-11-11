// Fancy rain
const ICONS = [
  { emoji: "📖", class: "rain-book" },
  { emoji: "✏️", class: "rain-pencil" },
  { emoji: "📚", class: "rain-books" },
]
function makeFancyRain() {
  const colors = ["#c2ad70", "#b3996a", "#e7c595", "#a489da", "#ffe382"]
  const rain = document.getElementById("rainContainer")
  const which = ICONS[Math.floor(Math.random() * ICONS.length)]
  const drop = document.createElement("span")
  drop.className = "rain-emoji " + which.class
  drop.textContent = which.emoji
  drop.style.left = Math.random() * 100 + "vw"
  drop.style.fontSize = 1.19 + Math.random() * 0.47 + "em"
  drop.style.animationDuration = 4.3 + Math.random() * 3.9 + "s"
  drop.style.animationDelay = Math.random() * 1.23 + "s"
  if (which.class === "rain-book") {
    drop.style.color = colors[Math.floor(Math.random() * colors.length)]
  }
  drop.style.opacity = 0.21 + Math.random() * 0.16
  drop.style.transform += ` rotate(${(-15 + Math.random() * 29).toFixed(0)}deg)`
  rain.appendChild(drop)
  setTimeout(() => drop.remove(), 8800)
}
for (let i = 0; i < 5; i++) setTimeout(makeFancyRain, i * 570)
setInterval(makeFancyRain, 1400)

// RSVP button: show modal board
const modal = document.getElementById("modalOverlay")
const openBtn = document.getElementById("rsvpBtn")
const closeBtn = document.getElementById("modalClose")
openBtn.addEventListener("click", function (e) {
  // Ripple
  let btn = e.target
  let rect = btn.getBoundingClientRect()
  let ripple = document.createElement("span")
  ripple.className = "ripple"
  ripple.style.width = ripple.style.height =
    Math.max(rect.width, rect.height) + "px"
  ripple.style.left = e.clientX - rect.left - rect.width / 2 + "px"
  ripple.style.top = e.clientY - rect.top - rect.height / 2 + "px"
  btn.appendChild(ripple)
  setTimeout(() => ripple.remove(), 600)

  // Modal
  setTimeout(() => {
    modal.style.display = "flex"
    const dialog = modal.querySelector(".modal-board")
    dialog.focus()
  }, 170)
})
// Close modal
function closeModal() {
  modal.style.display = "none"
  openBtn.focus()
}
closeBtn.addEventListener("click", closeModal)
// Close on ESC and click outside modal box
window.addEventListener("keydown", function (e) {
  if (modal.style.display === "flex" && (e.key === "Escape" || e.key === "Esc"))
    closeModal()
})
modal.addEventListener("mousedown", function (e) {
  if (e.target === modal) closeModal()
})
