//info blocks
const swipeBloks = document.querySelectorAll(".info-string");
const transitBloks = document.querySelectorAll(".info-blocks__item");
const hiddenBloks = document.querySelectorAll('.info-description');
const infoArrowRotate = document.querySelectorAll('.info-arrow');

swipeBloks.forEach((el, i) => {
   el.addEventListener('click', () => {
      swipeBloks[i].classList.toggle("qwerty");
      hiddenBloks[i].classList.toggle('hidden');
      transitBloks[i].classList.toggle('pwipebl', );
      infoArrowRotate[i].classList.toggle('info-arrow-rotate');
   })
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
