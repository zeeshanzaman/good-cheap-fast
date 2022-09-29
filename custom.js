const toggles = document.querySelectorAll('.toggle')
const good = document.querySelectorAll('#good')
const cheap = document.querySelectorAll('#cheap')
const fast = document.querySelectorAll('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))