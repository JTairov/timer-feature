document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input')
  const heading = document.getElementById('heading')

  function printHeading() {
    if ( input.value ) {
      heading.innerHTML = input.value
    } else heading.innerHTML = ''
  }

  let timeoutId

  function delayInput() {
    timeoutId = setTimeout(printHeading, 3000)
  }

  input.addEventListener('input', delayInput)

  clearTimeout(timeoutId)
})
