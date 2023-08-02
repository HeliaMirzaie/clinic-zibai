///////sticky header////////
window.onload = function () {
  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 100) {
      document.querySelector("header").classList.add("is-scrolling");
    } else {
      document.querySelector("header").classList.remove("is-scrolling");
    }
  });

  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
};

////reset form///////
const form = document.getElementById("myForm");
const button = document.getElementById("reseter");

button.addEventListener("click", function () {
  form.reset();
  event.preventDefault();
});

/////scrolling//////
document.addEventListener("DOMContentLoaded", function () {
  var macLink = document.getElementById("home");
  var iphone13Section = document.querySelector(".banner");

  macLink.addEventListener("click", function (event) {
    event.preventDefault();
    iphone13Section.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var macLink = document.getElementById("services");
  var iphone13Section = document.querySelector(".services");

  macLink.addEventListener("click", function (event) {
    event.preventDefault();
    iphone13Section.scrollIntoView({ behavior: "smooth" });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  var macLink = document.getElementById("article");
  var iphone13Section = document.querySelector(".projects");

  macLink.addEventListener("click", function (event) {
    event.preventDefault();
    iphone13Section.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var macLink = document.getElementById("contact-us");
  var iphone13Section = document.querySelector(".contact");

  macLink.addEventListener("click", function (event) {
    event.preventDefault();
    iphone13Section.scrollIntoView({ behavior: "smooth" });
  });
});

//////// reveal about-us /////

const home = document.getElementById("home");
const div = document.getElementById("fadeElement");

const options = {
  root: null,
  threshold: 0.5, 
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      div.classList.add("reveal1");
    }
  });
}, options);

observer.observe(home);

///////// hover services ///////


const services = document.querySelectorAll('.service');


services.forEach(service => {
  service.addEventListener('mouseover', () => {
    service.style.transform = 'scale(1.02)';
  });

  service.addEventListener('mouseout', () => {
    service.style.transform = 'scale(1)';
  });
});


///////////// gallery /////////////
const places=[
  {
      id: 1,
      name: "مسجد نصیر الملک",
      description: "مسجد نصیر الملک یکی از زیباترین مساجد شیراز است که قدمت آن به دوره قاجاریه بازمی‌گردد. این مسجد در محله‌ای واقع شده است که پیشتر به خانواده قوام تعلق داشت و تعدادی از آثار تاریخی آن دوران، در آن واقع شده‌اند. امروزه این مسجد دوست‌داشتنی که با نام مسجد صورتی نیز شهرت دارد، یکی از پرطرفدارترین مکان‌های دیدنی شیراز به شمار می‌رود و محبوبیت زیادی بین گردشگران داخلی و خارجی دارد.",
      src: "../images/article3.jpg"
  },
  {
      id: 2,
      name: "باغ ارم",
      description: "باغ ارم از جاذبه های گردشگری شیراز و نمونه‌ای از یک باغ-کوشک به حساب می‌آید که به‌واسطه درختان مرکبات و خیابان طویلی با سروهای باشکوه در طرفینش، محبوبیت زیادی بین گردشگران دارد. علاوه بر کوشک اصلی عهد قاجار که هسته مرکزی این باغ را تشکیل می‌دهد؛ سرونازهای بلند و کهن، زیبایی آن را دوچندان کرده‌اند.",
      src: "./assets/images/article2.jpg"
  },
  {
      id: 3,
      name: "خانه منطقی نژاد",
      description: "این خانه از بناهای تاریخی دوره قاجار و جاهای دیدنی شیراز به ‌شمار می‌‌رود و دارای بخش شاه‌نشین و اتاق‌های مختلفی در قسمت شرقی و غربی است. خانه منطقی نژاد در سال ۱۳۵۲ به‌عنوان یکی از آثار ملی ایران به ثبت رسید. برخی از بخش‌های موزه موسیقی شامل موسیقی ملل، سازهای ایرانی، استودیوی موسیقی، محل آموزش و تدریس، اتاق آرشیو و معرفی موسیقی‌دانان ایرانی و مخزن صوتی می‌شود.",
      src: "./assets/images/article1.jpg"
  },
  {
      id: 4,
      name: "عمارت شاپوری",
      description: "عمارت شاپوری از زیباترین باغ‌عمارت‌ها و مکان های دیدنی شیراز است. این عمارت به دوره پهلوی اول تعلق دارد و در آن می‌توان تلفیقی از معماری ایرانی و اروپایی را مشاهده کرد. در این مجموعه جلوه‌های طبیعی باغ و معماری زیبای بنا در کنار یک‌دیگر چشم‌اندازی منحصر‌به‌فرد را خلق کرده‌ است.",
      src: "./assets/images/article4.jpg"
  },
  {
      id: 5,
      name: "باغ نارنجستان قوام",
      description: "باغ نارنجستان که در میان میردم به باغ قوام نیز شهرت دارد، یکی از زیباترین جاهای دیدنی شیراز است. این بنا از عمارت‌های دوره قاجاریه است و به دلیل وفور درختان نارنج به این نام خوانده می‌شود.",
      src: "./assets/images/article5.jpg"
  }
]

const img = document.querySelectorAll('.all-imgs img');
const currentImage = document.querySelector('.current-img');
const titleImage = document.querySelector('.image-title');
const descImage = document.querySelector('.image-desc');

img.forEach(function (image , index){
  image.src = places[index].src; 
  image.addEventListener("click", function(){
      currentImage.src = places[index].src;
      titleImage.innerText = places[index].name;
      descImage.innerText = places[index].description;
      currentImage.classList.add("animate-imgs")

      setTimeout(function(){
          currentImage.classList.remove("animate-imgs")
      },400)
  })
})


      currentImage.src = places[0].src;
      titleImage.innerText = places[0].name;
      descImage.innerText = places[0].description;