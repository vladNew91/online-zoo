//slider how it works
const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', (e) => {
  let newActive = e.target;
  let isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;
  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const dowbleNext = elems.find((elem) => elem.dataset.pos == -2);
  const dowbleLast = elems.find((elem) => elem.dataset.pos == 2);
  const first = elems.find((elem) => elem.dataset.pos == -3);
  const last = elems.find((elem) => elem.dataset.pos == 3);
  
  current.classList.remove('carousel__item_active');
  [current, prev, next, dowbleNext, dowbleLast, first, last].forEach(item => {
    let itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 3) {
    return -current
  }
  return diff;
};

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

//how-it-works slider
let items = document.querySelectorAll('.carousel-HIW .item');
let currentItem = 0;
let isEnabled = true;

const changeCurrentItem = (n) => {
	currentItem = (n + items.length) % items.length;
};

const hideItem = (direction) => {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
};

const showItem = (direction) => {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
};

const nextItem = (n) => {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
};

const previousItem = (n) => {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
};

document.querySelector('.control.left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.control.right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

let el = document.querySelector('.carousel-HIW');
//  swipedetect(el);
//testimonials slider

//  burger menu
const burger = document.getElementsByClassName('burger')[0];
const burgerList = document.getElementsByClassName('burger-list')[0];

burger.addEventListener('click', () => {
  burgerList.classList.toggle('show-burger-list');
});
