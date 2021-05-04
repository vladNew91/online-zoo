// //map
// const mapImage = document.querySelector('.world-map');
// const wrapper = document.querySelector('main');
// const headerElem = document.querySelector('.header');
// const footerElem = document.querySelector('footer');
// const zoomInButton = document.querySelector('.plus');
// const zoomOutButton = document.querySelector('.minus');

// let topIndent = 0;
// let leftIndent = 0;

// const calculateCoords = (e, elem) => {
//   var box = elem.getBoundingClientRect();
//   topIndent = e.pageY - box.top + pageYOffset;
//   leftIndent = e.pageX - box.left + pageXOffset;
// }

// const moveAt = (e) => {
//   if (mapImage.style.position !== "absolute") {mapImage.style.position = "absolute";}
//   mapImage.style.left = e.pageX - leftIndent + 'px';
//   if (e.pageX >= wrapper.offsetWidth) {
//     stopDrag();
//   } else if (e.pageX <= 0) {
//     stopDrag();
//   }
//   mapImage.style.top = e.pageY - (200 - pageYOffset) - topIndent + 'px';
// }

// const stopDrag = () => {
//   document.removeEventListener('mousemove', moveAt);
//   mapImage.removeEventListener('mouseup', stopDrag);
// }

// //mousedown
// mapImage.addEventListener('mousedown', (e) => {

//   if (mapImage.width <= wrapper.offsetWidth && mapImage.height <= wrapper.offsetHeight) {
//     return;
//   }

//   calculateCoords(e, mapImage);
//   moveAt(e);

//   document.addEventListener('mousemove', moveAt);
//   mapImage.addEventListener('mouseup', stopDrag);
// });



// mapImage.ondragstart = function() {
//   return false;
// };

// headerElem.addEventListener('mouseenter', stopDrag);
// footerElem.addEventListener('mouseenter', stopDrag);

// zoomInButton.addEventListener('click', () => {
//   if (mapImage.width <= wrapper.offsetWidth * 2) {
//     if (mapImage.style.position !== "absolute") {mapImage.style.position = "absolute";}
//     const prevWidth = mapImage.width;
//     const prevHeight = mapImage.height;
//     mapImage.style.width = `${mapImage.width * 1.25}px`;
//     mapImage.style.height = "auto";
//     const nextWidth = mapImage.width;
//     const nextHeight = mapImage.height;
//     const topPos = mapImage.offsetTop || 0;
//     const leftPos = mapImage.offsetLeft || 0;


//     mapImage.style.left = `${leftPos - ((nextWidth - prevWidth) / 2)}px`;
//     mapImage.style.top = `${topPos - ((nextHeight - prevHeight) / 2)}px`;
//   }
// });

// zoomOutButton.addEventListener('click', () => {
//   if (mapImage.width >= wrapper.offsetWidth || mapImage.height >= wrapper.offsetHeight) {
//     if (mapImage.style.position !== "absolute") {mapImage.style.position = "absolute";}
//     const prevWidth = mapImage.width;
//     const prevHeight = mapImage.height;
//     mapImage.style.width = `${mapImage.width / 1.25}px`;
//     mapImage.style.height = "auto";
//     const nextWidth = mapImage.width;
//     const nextHeight = mapImage.height;
//     const topPos = mapImage.offsetTop || 0;
//     const leftPos = mapImage.offsetLeft || 0;


//     mapImage.style.left = `${leftPos + ((prevWidth - nextWidth) / 2)}px`;
//     mapImage.style.top = `${topPos + ((prevHeight - nextHeight) / 2)}px`;

//     if (mapImage.width <= wrapper.offsetWidth && mapImage.height <= wrapper.offsetHeight) {
//       mapImage.style.width = `${wrapper.offsetWidth}px`;
//       mapImage.style.height = "auto";
//       mapImage.style.top = `${(wrapper.offsetHeight - mapImage.height) / 2}px`;
//       mapImage.style.left = '0px';
//       if (mapImage.height >= wrapper.offsetHeight) {
//         mapImage.style.height = `${wrapper.offsetHeight}px`;
//         mapImage.style.width = 'auto';
//         mapImage.style.top = '0px';
//         mapImage.style.left = `${(wrapper.offsetWidth - mapImage.width) / 2}px`;
//       }
//     }
//   }
// });

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
    alert("Thank you for your donation")
  }
});

//map
const myImg = document.querySelector(".world-map");
const parentMyImg = document.querySelector("main");

function zoomin() {
  let currWidth = myImg.clientWidth;
  if (currWidth > 2500) return;
  else {
    myImg.style.width = (currWidth * 1.15) + "px";
  }
}

function zoomout() {
  let currWidth = myImg.clientWidth;
  
  if (currWidth < 1100) {
    myImg.style.top = "calc((100% - 647px) / 2)";
    myImg.style.left = "calc((100% - 1100px) / 2)";
    return;
  }
  else {
    myImg.style.width = (currWidth - 100) + "px";
  }
}

//drag
const mapImage = document.querySelector(".world-map");
const mapParent = document.querySelector("main");

function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  console.log(box)
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

mapImage.addEventListener("mousedown", (e) => {
  let coords = getCoords(mapImage);
  let shiftX = e.pageX - coords.left;
  let shiftY = e.pageY - coords.top;

  mapImage.style.position = 'absolute';
  mapParent.appendChild(mapImage);
  moveAt(e);

  function moveAt(e) {
    mapImage.style.left = e.pageX - shiftX + 'px';
    mapImage.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  mapImage.onmouseup = function() {
    document.onmousemove = null;
    mapImage.onmouseup = null;
  };
});

mapImage.ondragstart = function() {
  return false;
};
