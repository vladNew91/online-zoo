//modal window 1,2
const modal = document.querySelector(".modal");
const modal1 = document.querySelector(".modal-1");
const modal2 = document.querySelector(".modal-2");
const btnDonate = document.querySelector(".footer-top .btn-favorite");
const modalClose = document.querySelector(".modal-close");
const btnNext = document.querySelector(".modal-btn-next");
const amount = document.querySelector(".modal-amount-money");
const btnModalDonate = document.querySelector(".modal-btn-donate");
const cardNumber = document.querySelector(".card-number");
const modalMM = document.querySelector(".modal-mm");
const modalYY = document.querySelector(".modal-yy");
const modalCVC = document.querySelector(".modal-cvc");

btnDonate.addEventListener("click", () => {
  modal.style.display = "flex";
  modal1.style.display = "flex";
  modal2.style.display = "none";
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  return e.target == modal ? modal.style.display = "none" : false;
});

//button next
btnNext.addEventListener("click", () => {
  if (amount.value == "") {
    btnNext.disabled = true;
    amount.placeholder = "You did not indicate the amount";
  } else {
    modal1.style.display = "none",
    modal2.style.display = "flex";
    console.log(amount.value)
  }
});

//limitation amount money
amount.oninput = () => {
  return amount.value.length > 4 ? 
    amount.value = amount.value.slice(0,4) : false;
};

//limitation card number
cardNumber.oninput = () => {
  return cardNumber.value.length > 16 ? 
  cardNumber.value = cardNumber.value.slice(0,16) : false;
};

//limitation modal-mm
modalMM.oninput = () => {
  return modalMM.value.length > 2 ? 
  modalMM.value = modalMM.value.slice(0,2) : false;
};

//limitation modal-yy
modalYY.oninput = () => {
  return modalYY.value.length > 2 ? 
  modalYY.value = modalYY.value.slice(0,2) : false;
};

//limitation modal-cvc
modalCVC.oninput = () => {
  return modalCVC.value.length > 3 ? 
  modalCVC.value = modalCVC.value.slice(0,3) : false;
};

//button modal-btn-donate
btnModalDonate.addEventListener("click", () => {
  if (cardNumber.value == "" || modalMM.value == "" || 
      modalYY.value == "" || modalCVC.value == "") {
        btnModalDonate.disabled = true;
        cardNumber.placeholder = "You did not indicate the card number";
  } else {
    modal.style.display = "none";
    alert("Thank you for your donation");
  };
});

//map
const mapImage = document.querySelector(".world-map");
//  const mapImage = document.querySelector(".map");
const mapItems = document.querySelector(".world-map-items");
const mapParent = document.querySelector("main");

const zoomIn = () => {
  let currWidthImage = mapImage.clientWidth;
  let currWidthItems = mapItems.clientWidth;
  let currHeightItems = mapItems.clientHeight;

  if (currWidthImage > 2000) return;
  //map width
  mapImage.style.width = (currWidthImage * 1.15) + "px";
  //map items width, height
  mapItems.style.width = (currWidthItems * 1.15) + "px";
  mapItems.style.height = (currHeightItems * 1.15) + "px";
};

const zoomOut = () => {
  let currWidthImage = mapImage.clientWidth;
  let currWidthItems = mapItems.clientWidth;
  let currHeightItems = mapItems.clientHeight;

  if (currWidthImage < 1170) {
    mapImage.style.top = "calc((100% - 747px) / 2)";
    mapImage.style.left = "calc((100% - 1162px) / 2)";
    mapImage.style.width = "1162px";
    mapItems.style.width = "1162px";
    mapItems.style.height = "747px";
    return;
  };

  mapImage.style.width = (currWidthImage / 1.15) + "px";
  mapItems.style.width = (currWidthItems / 1.15) + "px";
  mapItems.style.height = (currHeightItems / 1.15) + "px";
};

//drag & drop
const getCoords = (elem) => {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
};

const eventOnMap = "pointerdown" || "";

mapImage.addEventListener("pointerdown", (e) => {
  const coords = getCoords(mapImage);
  let shiftX = e.pageX - coords.left;
  let shiftY = e.pageY - coords.top + 80;

  const moveAt = (e) => {
    mapImage.style.left = e.pageX - shiftX + 'px';
    mapImage.style.top = e.pageY - shiftY + 'px';
  };

  moveAt(e);

  document.onmousemove = (e) => {
    moveAt(e);
  };

  mapImage.onmouseup = () => {
    document.onmousemove = null;
  };

  mapParent.onmouseleave = () => {
    document.onmousemove = null;
  };
  
  mapImage.ondragstart = () => {
    return;
  };
});

//  burger menu
const burger = document.getElementsByClassName('burger')[0];
const burgerList = document.getElementsByClassName('burger-list')[0];

burger.addEventListener('click', () => {
  burgerList.classList.toggle('show-burger-list');
});
