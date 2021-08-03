//info blocks
const btnShowInfo = document.querySelectorAll(".info-arrow");
const transitBloks = document.querySelectorAll(".info-blocks__item");
const hiddenBloks = document.querySelectorAll('.info-description');
const infoArrowRotate = document.querySelectorAll('.info-arrow');

btnShowInfo.forEach((el, i) => {
  el.addEventListener('click', () => {
    btnShowInfo[i].classList.toggle("qwerty");
    hiddenBloks[i].classList.toggle('hidden');
    transitBloks[i].classList.toggle('pwipebl', );
    infoArrowRotate[i].classList.toggle('info-arrow-rotate');
  });
})

// aside
const btnShowAside = document.querySelector(".show-aside-1200");
const aside = document.querySelector(".aside");

btnShowAside.addEventListener("click", () => {
   aside.classList.add("i-can-see-aside");
   setTimeout(() => aside.classList.remove("i-can-see-aside"), 6000);
});

//"carousel" demo viveos
const demoVideoWrappers = document.querySelectorAll(".wrapper-demo-video");
const demoVideos = document.querySelectorAll(".demo-video");
const mainVideo = document.querySelector(".main-video");

demoVideoWrappers.forEach((wrap,i) => {
   wrap.addEventListener("click", () => {
      let a = mainVideo.src;
      mainVideo.src = demoVideos[i].src;
      demoVideos[i].src = a;
   });
});

//modal window 1,2
const modal = document.querySelector(".modal");
const modal1 = document.querySelector(".modal-1");
const modal2 = document.querySelector(".modal-2");
const btnDonate = document.querySelectorAll(".pay-action");
const modalClose = document.querySelector(".modal-close");
const btnNext = document.querySelector(".modal-btn-next");
const amount = document.querySelector(".modal-amount-money");
const btnModalDonate = document.querySelector(".modal-btn-donate");
const cardNumber = document.querySelector(".card-number");
const modalMM = document.querySelector(".modal-mm");
const modalYY = document.querySelector(".modal-yy");
const modalCVC = document.querySelector(".modal-cvc");

btnDonate.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
    modal1.style.display = "flex";
    modal2.style.display = "none";
  });
})

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

//  burger menu
const burger = document.getElementsByClassName('burger')[0];
const burgerList = document.getElementsByClassName('burger-list')[0];

burger.addEventListener('click', () => {
  burgerList.classList.toggle('show-burger-list');
});
