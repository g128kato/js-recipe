const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね")
}

button.onclick = alertMessage

const inputText = document.getElementById("input-tex")
const inputDate = document.getElementById("input-date")

document.onkeydown = function (e) {
  console.log(e.key)
}

inputText.oninput = logValue
inputDate.oninput = logValue
