let menubar = document.querySelector("#menubar");
let navbar = document.querySelector(".navbar");

menubar.onclick = () => {
  menubar.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }

  menubar.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

document.querySelector("#login_btn").onclick = () => {
  document.querySelector(".login-form-container").classList.toggle("active");
};

document.querySelector("#close-login-btn").onclick = () => {
  document.querySelector(".login-form-container").classList.remove("active");
};

document.querySelector(".home").onmousemove = (e) => {
  document.querySelectorAll(".home-parallax").forEach((element) => {
    let speed = element.getAttribute("data-speed");

    let x = (window.innerWidth - e.pageX * speed) / 1000;
    let y = (window.innerHeight - e.pageY * speed) / 1000;

    element.style.transform = `translateX(${y}px) translateY(${x}px)`;
  });
};

document.querySelector(".home").onmouseleave = (e) => {
  document.querySelectorAll(".home-parallax").forEach((element) => {
    let speed = element.getAttribute("data-speed");

    element.style.transform = `translateX(0px) translateY(0px)`;
  });
};

let wrapper = document.querySelector(".wrapper-box");
let activeBox = wrapper.querySelectorAll(".box");
let activeLable = document
  .querySelector(".activeCircle")
  .querySelectorAll(".fa-circle-dot");
let nextBtn = document.querySelector("#nextBtn");
let preBtn = document.querySelector("#preBtn");

let indexNo = 0;

nextBtn.onclick = () => {
  indexNo++;
  changeBox();
};

preBtn.onclick = () => {
  indexNo--;
  changeBox();
};

let changeBox = () => {
  if (indexNo > activeBox.length - 1) {
    indexNo = 0;
  } else if (indexNo < 0) {
    indexNo = activeBox.length - 1;
  }

  for (let i = 0; i < activeBox.length; i++) {
    if (i === indexNo) {
      activeBox[i].classList.add("active");
      activeLable[i].classList.add("fa-solid");

      if (window.screen.width > 768) {
        wrapper.style.transform = `translateX(${indexNo * -250}px)`;
      }
    } else {
      activeBox[i].classList.remove("active");
      activeLable[i].classList.remove("fa-solid");
    }
  }
};

let fwrapper = document.querySelector(".featured-wrapper-box");
let fActbox = fwrapper.querySelectorAll(".box");
let fActLabel = document
  .querySelector(".fActCircle")
  .querySelectorAll(".fa-circle-dot");
let fNextBtn = document.querySelector("#fNextBtn");
let fPreBtn = document.querySelector("#fPreBtn");

let fIndexNo = 0;

fNextBtn.onclick = () => {
  fIndexNo++;
  fchangeBox();
};

fPreBtn.onclick = () => {
  fIndexNo--;
  fchangeBox();
};

let fchangeBox = () => {
  if (fIndexNo > fActbox.length - 1) {
    fIndexNo = 0;
  } else if (fIndexNo < 0) {
    fIndexNo = fActbox.length - 1;
  }

  for (let i = 0; i < fActbox.length; i++) {
    if (i === fIndexNo) {
      fActbox[i].classList.add("active");
      fActLabel[i].classList.add("fa-solid");

      if (window.screen.width > 768) {
        fwrapper.style.transform = `translateX(${fIndexNo * -28}vw)`;
      }
    } else {
      fActbox[i].classList.remove("active");
      fActLabel[i].classList.remove("fa-solid");
    }
  }
};


let rwrapper = document.querySelector(".review-wrapper-box");
let rActbox = rwrapper.querySelectorAll(".box");
let rActLabel = document
  .querySelector(".rActCircle")
  .querySelectorAll(".fa-circle-dot");
let rNextBtn = document.querySelector("#rNextBtn");
let rPreBtn = document.querySelector("#rPreBtn");

let rIndexNo = 0;

rNextBtn.onclick = () => {
    rIndexNo++;
  rchangeBox();
};

rPreBtn.onclick = () => {
    rIndexNo--;
  rchangeBox();
};

let rchangeBox = () => {
  if (rIndexNo > rActbox.length - 1) {
    rIndexNo = 0;
  } else if (rIndexNo < 0) {
    rIndexNo = rActbox.length - 1;
  }

  for (let i = 0; i < rActbox.length; i++) {
    if (i === rIndexNo) {
        rActbox[i].classList.add("active");
        rActLabel[i].classList.add("fa-solid");

      if (window.screen.width > 768) {
        rwrapper.style.transform = `translateX(${rIndexNo * -20}vw)`;
      }
    } else {
        rActbox[i].classList.remove("active");
        rActLabel[i].classList.remove("fa-solid");
    }
  }
};


// Save car entry to localStorage
const carData = {
  carName,
  year,
  fuelType,
  transmission,
  mileage,
  price,
  contact
};

