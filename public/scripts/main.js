window.addEventListener("load", (event) => {







//Ambient pallete color changer
setInterval(ambianceStart, 15000 )

function ambianceStart()  {
    function randomColorParam(){
        return Math.floor(80 + Math.random() * 200 - 80)
    }

    let primaryColor = `rgba(${randomColorParam()},${randomColorParam()},${randomColorParam()},0.60)`;
    let secondaryColor = `rgba(${randomColorParam()},${randomColorParam()},${randomColorParam()})`;
    var r = document.querySelector(':root');
    r.style.setProperty('--primary-color', primaryColor);
    r.style.setProperty('--secondary-color', secondaryColor);
}

// Home page Banner slide show images
const imageDiv = document.querySelector('.parallax');
const imageUrlArray = [
    './images/pexels-designecologist-1779487.webp',
    './images/pexels-miguel-á-padriñán-1591058.webp',
    './images/pexels-oleksandr-pidvalnyi-9822732 (1).webp',
    './images/pexels-photomix-company-230544.webp',
    './images/pexels-pixabay-39284.webp',
    './images/pexels-tobias-dziuba-927629.webp',
]

let imageIterator = 0;
imageUrlArray.forEach(element => {
    let url = element;
    var img = new Image();
    img.src= url;
    console.log(img)
});
setInterval(slideshowImagesStart, 15000);
function slideshowImagesStart() {
    if(imageIterator ===  imageUrlArray.length) {
        imageIterator = 0;
    }
    // let url = imageUrlArray[imageIterator];
    // var img = new Image();
    // console.log(img)
    // img.src= url;
    imageDiv.style.backgroundImage = `url('${imageUrlArray[imageIterator]}')`;
    imageIterator++;
}




// Home page banner slide show text
const slideShowElements = document.querySelector(".text-slideshow").children;

const startSlideShow = function(){
    const elementsArray = Array.from(slideShowElements);
    
    const hideElements = function() {
        Array.from(slideShowElements).forEach(element => {
            element.style.transition ="opacity 1s";
            element.style.opacity = 0;
        });  
    }
    // hideElements(); //Hiden with CSS

    let elementIterator = 0;
    setInterval(() => {
        if(elementIterator === elementsArray.length){
            elementIterator =  0 ;
            hideElements();
        } else {
            hideElements();
            elementsArray[elementIterator].style.opacity = 100;
            elementIterator++;
        }
        
    }, 2000);
}

startSlideShow();

// Burger Menu functionality

const burgerMenu = document.querySelector(".burger-menu");
const navigationUl = document.querySelector(".nav-page-links-ul");
const navigationLi = document.querySelectorAll(".nav-page-links-li");
var menuClicked = false;
burgerMenu.addEventListener('click', () => {
    const lineClassNameArray = ["line-one","line-two","line-three"];
    if(menuClicked){
        for (let index = 0; index < burgerMenu.children.length; index++) {
            const element = burgerMenu.children[index];
            let currentClassName = lineClassNameArray[index];
            element.classList.remove(`${currentClassName}`); 
        }
        for (let index = 0; index < navigationUl.children.length; index++) {
            const element = navigationUl.children[index];
            element.classList.remove("nav-page-links-li-mobile")
            // element.classList.add("nav-page-links-li");
        }
        navigationUl.classList.remove('nav-page-links-ul-mobile');
        menuClicked = false;
    } else {
        for (let index = 0; index < burgerMenu.children.length; index++) {
            const element = burgerMenu.children[index];
            let currentClassName = lineClassNameArray[index];
            element.classList.add(`${currentClassName}`); 
        }
        for (let index = 0; index < navigationUl.children.length; index++) {
            const element = navigationUl.children[index];
            element.classList.add("nav-page-links-li-mobile");
            // element.classList.remove("nav-page-links-li");
        }
        navigationUl.classList.add('nav-page-links-ul-mobile');
        menuClicked = true;
    }
})

var x = window.matchMedia("(max-width: 700px)");
  if (x.matches) { // If media query matches

// Card Animations when intersecting with the view port
let callback = (entries, observer) => {
	console.log('call back');
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.90) {
            entry.target.classList.add("card-intersect-shadow-mobile");
          } else {
            entry.target.classList.remove("card-intersect-shadow-mobile");
          }
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   console.log(entry.isIntersecting)
        //   entry.rootBounds
        //   entry.target
        //   entry.time
      });
  };
  
function buildThresholdList() {
let thresholds = [];
let numSteps = 20;

for (let i=1.0; i<=numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
}
thresholds.push(0);
return thresholds;
}
  
let options = {
    root: null,
    rootMargin: '0px',
    threshold: buildThresholdList()
  }
  
let observer = new IntersectionObserver(callback, options);

let target = document.querySelectorAll('.card');
observer.observe(target[0]);
observer.observe(target[1]);
observer.observe(target[2]);

   
  } else {
  }
}, false);
