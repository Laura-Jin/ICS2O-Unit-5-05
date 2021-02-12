let number = 0

document.getElementById('calculate').addEventListener('click', buttonOne)

function buttonOne () {
  number = document.getElementById('number').value
  number = parseInt(number)
  number= number**2
  alert(number)
}
