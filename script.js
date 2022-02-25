const button = document.getElementById('btn')
const toasts = document.getElementById('toasts')

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
  'Message Five',
]

button.addEventListener('click', () => {
  createNotification()
})

function createNotification() {
  const notification = document.createElement('div')
  notification.classList.add('toast')
  notification.innerText = getRandomMessage()
  toasts.appendChild(notification)
  setTimeout(() => {
    notification.remove()
    // toasts.removeChild(notification)
  }, 5000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}
