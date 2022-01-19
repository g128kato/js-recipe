const answer = document.getElementById("answer")

const tureButton = document.getElementById("favoriteComic")
const firstFalseButton = document.getElementById("UnfavoriteComic1")
const secondFalseButton = document.getElementById("UnfavoriteComic2")

tureButton.onclick = function () {
  answer.textContent = "当たりです。大好きです"
}

firstFalseButton.onclick = function () {
  answer.textContent = "違います。あまり読まないです。"
}

secondFalseButton.onclick = function () {
  answer.textContent = "違います。あまり読まないです。"
}
