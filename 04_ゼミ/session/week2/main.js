const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function () {
  const div = createDiv(memoInput.value)
  memoContainer.append(div)

  memoInput.value = ""
}

const createDiv = function (text) {
  const div = document.createElement("div")

  div.append(text)

  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"

  deleteButton.onclick = function () {
    div.remove()
  }

  div.append(deleteButton)

  return div
}
