document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input')
  const btn = document.getElementById('btn')
  const time = document.getElementById('time')

  function setTimer() {
    if(input.value) {
      time.textContent = input.value
    }
    else time.textContent = '0'
  }

  let timerId

  function decreaseTime() {
    let leftTime = parseInt(time.textContent)
    if( leftTime > 0 ) {
      leftTime--
    }
    if ( leftTime == 0 ) {
      clearInterval(timerId)
    }
    time.textContent = leftTime + ''
  }

  function startTimer() {
    timerId = setInterval(() => {
      decreaseTime()
    },
    1000)
  }

  btn.addEventListener('click', () => {
    if (parseInt(time.textContent) > 0) {
      clearInterval(timerId)
    }
    setTimer()
    startTimer()
  })
})
