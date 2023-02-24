window.addEventListener("load", (event) => {







//Ambient pallete color changer
let red = 0;
let green = 0;
let blue = 0;
setInterval(ambianceStart, 1)

function ambianceStart ()  {
    function randomColorParam(){
        return Math.floor(Math.random() * 256)
    }

    let colorz = `rgba(${randomColorParam()},${randomColorParam()},${randomColorParam()},1)`
    console.log(colorz)
    document.body.style.background = colorz;
    console.log(red, green , blue)
}







// Main banner slide show
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


// Card Animations when intersecting with the view port
let callback = (entries, observer) => {
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


// End of onload function
}, false);