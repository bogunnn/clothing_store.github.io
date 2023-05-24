var selectedDiv = null;

function handleDivClick(div) {
  if (selectedDiv) {
    selectedDiv.classList.remove('highlighted');
  }

  if (selectedDiv === div) {
    selectedDiv = null;
  } else {
    selectedDiv = div;
    selectedDiv.classList.add('highlighted');
  }
}



function addToCart() {
  var h1 = document.querySelector('h1');
  var bigRed = document.querySelector('.big-red')
  var message = "В корзину успешно добавлено: " + h1.innerText + "\n" + bigRed.innerText;
  alert(message);
}

