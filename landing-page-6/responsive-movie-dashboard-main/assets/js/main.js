/*=============== SHOW MENU ===============*/
const nav = document.getElementById('nav'),
      headerMenu = document.getElementById('header-menu'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(headerMenu){
   headerMenu.addEventListener('click', () =>{
      nav.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
      nav.classList.remove('show-menu')
   })
}

let input = document.querySelector('input');
let data = [
   {card__name:'Avengers',
    src:'assets/img/movie-1.png',
   card__category:'Action'
   },

   {card__name:'Interstellar',
    src:'assets/img/movie-2.png',
   card__category:'Science/Fiction'
   },

   {card__name:'The Lord of the Rings',
    src:'assets/img/movie-3.png',
   card__category:'Science/Fiction'
   },

   {card__name:'Inception',
    src:'assets/img/movie-4.png',
   card__category:'Action'
   },

   {card__name:'The Dark Knight',
    src:'assets/img/movie-5.png',
   card__category:'Science/Fiction'
   },

   {card__name:'Avengers Age of Ultron',
    src:'assets/img/movie-6.png',
   card__category:'Action'
   },
];

let card = "";
data.forEach(function(elem){
    card += ` <article class=" card__article swiper-slide">
   <a href="#" class="card__link">
      <img src="${elem.src}" alt="image" class="card__img">
      <div class="card__shadow"></div>

      <div class="card__data">
         <h3 class="card__name">${elem.card__name}</h3>
         <span class="card__category">${elem.card__category}</span>
      </div>

      <i class="ri-heart-3-line card__like"></i>
   </a>
</article>`
});

let main = document.querySelector('.swiper-wrapper').innerHTML = card;





let data2 = [
   {
      card__name:'Jurassic World',
      src:'assets/img/new-1.png',
      card__category:'Science/Fiction'
   },
   {
      card__name:'Spider-Man No Way Home',
      src:'assets/img/new-2.png',
      card__category:'Science/Action'
   },
   {
      card__name:'Fantastic Beasts: Dumbledore Secrets',
      src:'assets/img/new-3.png',
      card__category:'Adventure/Fantasy'
   },
   {
      card__name:'Toy Story',
      src:'assets/img/new-4.png',
      card__category:'Animation'
   },
   {
      card__name:'Sonic 2',
      src:'assets/img/new-5.png',
      card__category:'Action/Adventure'
   },
   {
      card__name:'X-Men',
      src:'assets/img/new-6.png',
      card__category:'Science/Action'
   },
]

let card2 = ""; 
data2.forEach(function(elems){
   card2 += `<article class="new__card card__article swiper-slide">
   <a href="#" class="card__link">
      <img src="${elems.src}" alt="image" class="card__img">
      <div class="card__shadow"></div>

      <div class="new__data card__data">
         <h3 class="card__name">${elems.card__name}</h3>
         <span class="card__category">${elems.card__category}</span>
      </div>
   </a>
</article>`
});

let main2 = document.querySelector('.main2').innerHTML = card2;


input.addEventListener('input',()=>{
   let info = data.filter((e)=>{
   return e.card__name.startsWith(input.value)
   });
   var newuser = '';
   info.forEach(function(elems){
      newuser += `<article class="new__card card__article swiper-slide">
      <a href="#" class="card__link">
         <img src="${elems.src}" alt="image" class="card__img">
         <div class="card__shadow"></div>
   
         <div class="new__data card__data">
            <h3 class="card__name">${elems.card__name}</h3>
            <span class="card__category">${elems.card__category}</span>
         </div>
      </a>
   </article>`
})
document.querySelector('.swiper-wrapper').innerHTML = newuser;
});



/*=============== SWIPER MOVIE ===============*/
let swiperMovie = new Swiper('.movie__swiper', {
   loop: true,
   grabCursor: true,
   slidesPerView: 2,
   spaceBetween: 24,

   breakpoints:{
      440: {
         slidesPerView: 'auto',
      },
      768: {
         slidesPerView: 4,
      },
      1200: {
         slidesPerView: 5,
      },
   },
})

/*=============== SWIPER NEW ===============*/
let swiperNew = new Swiper('.new__swiper', {
   loop: true,
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 2,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   breakpoints:{
      440: {
         centeredSlides: false,
         slidesPerView: 'auto',
      },
      768: {
         centeredSlides: false,
         slidesPerView: 4,
      },
      1200: {
         centeredSlides: false,
         slidesPerView: 5,
      },
   },
})

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
   const header = document.getElementById('header')
   // Add a class if the bottom offset is greater than 50 of the viewport
   this.scrollY >= 50 ? header.classList.add('blur-header') 
                      : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)
