document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input')
  const btn = document.getElementById('btn')
  const time = document.getElementById('time')

  function setTimer() {
    if ( input.value ) {
      time.innerHTML = input.value
    } else time.innerHTML = '0'
  }

  input.addEventListener('input', setTimer)

  function decreaseTime() {
    let leftTime = parseInt(time.textContent)
    if( leftTime > 0 ) {
      leftTime--
      console.log('tick')
    }
    time.textContent = leftTime + ''
  }

  let intervalId
  function startTimer() {
    if( parseInt(time.textContent) > 0 ){
      intervalId = setInterval(decreaseTime, 1000)
    } else {
      clearInterval(intervalId)
    }
  }

  btn.addEventListener('click', startTimer)
})
