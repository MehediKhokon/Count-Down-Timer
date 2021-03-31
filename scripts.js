let date_to_count = new Date('1 Jan 2022')

const day = document.querySelector('#days')
const hour = document.querySelector('#hours')
const min = document.querySelector('#mins')
const second = document.querySelector('#seconds')

function countdown() {
  let current_date = new Date()
  let total_seconds = (date_to_count - current_date) / 1000
  let days = Math.floor(total_seconds / 3600 / 24)
  let hours = Math.floor(total_seconds / 3600) % 24
  let mins = Math.floor(total_seconds / 60) % 60
  let seconds = Math.floor(total_seconds) % 60

  day.textContent = format(days)
  hour.textContent = format(hours)
  min.textContent = format(mins)
  second.textContent = format(seconds)

  console.log(total_seconds, days, hours, mins, seconds)
}

countdown()
setInterval(countdown, 1000)

function format(time) {
  return time < 10 ? `0${time}` : time
}
