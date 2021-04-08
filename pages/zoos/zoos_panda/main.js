const btn = document.querySelectorAll('.info-arrow');
const hiddenBloks = document.querySelectorAll('.info-description');
const swipeBloks = document.querySelectorAll('.info-blocks__item');
const infoArrowRotate = document.querySelectorAll('.info-arrow');

btn.forEach((el, i) => {
   el.addEventListener('click', () => {
      hiddenBloks[i].classList.toggle('hidden');
      swipeBloks[i].classList.toggle('pwipebl', );
      infoArrowRotate[i].classList.toggle('info-arrow-rotate');
   })
})

// aside
const btnShowAside = document.querySelector(".show-aside-1200");
const aside = document.querySelector(".aside");

btnShowAside.addEventListener("click", () => {
   aside.classList.toggle("hidden-aside")
})