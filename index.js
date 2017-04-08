function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var selected = document.getElementById("nested")
  return selected.querySelector("div.target")
}

function increaseRankBy(n) {
  var ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < ranks.length; i++) {
    var pulledNumber = parseInt(ranks[i].innerHTML)
    ranks[i].innerHTML = (pulledNumber + n).toString()
  }
}

function deepestChild() {
  let grandNode = document.getElementById("grand-node")
  var tags = grandNode.getElementsByTagName("div")
  var i = tags.length - 1
  return tags[i]
}
