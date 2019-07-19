let reviewSection = document.getElementById('reviewsMedley')

let testElement = document.createElement('p')
let textNode = document.createTextNode('I am testing myself')
testElement.appendChild(textNode)

reviewSection.insertBefore(testElement, reviewSection.childNodes[0])
