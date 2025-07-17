let box = document.querySelector('.box')

let bottom = 0
let left = 0

let moveUp = function () {
  bottom = bottom + 5
  box.style.bottom = bottom + 'px'
}
let moveDown = function () {
  bottom = bottom - 5
  box.style.bottom = bottom + 'px'
}
let moveLeft = function () {
  left = left - 5
  box.style.left = left + 'px'
}
let moveRight = function () {
  left = left + 5
  box.style.left = left + 'px'
}

window.addEventListener('keydown', function (dets) {
  if (dets.key == 'ArrowUp') moveUp()
  if (dets.key == 'ArrowDown') moveDown()
  if (dets.key == 'ArrowLeft') moveLeft()
  if (dets.key == 'ArrowRight') moveRight()

})