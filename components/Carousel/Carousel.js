class Carousel {
  constructor(element) {
    this.element = element;
    this.left = document.querySelector('.left-button');
    // console.log(this.left)
    this.right = document.querySelector('.right-button');
    // console.log(this.right)

    this.left.addEventListener('click', () => this.handleLeft());
    this.right.addEventListener('click', () => this.handleRight());
  }
  handleLeft() {

  }
  handleRight() {
    this.element.classList.add('slide-left');
    // this.element.classList.remove('selected')
    // document.querySelector('.carousel').children[2].classList.add('slide')
    // console.log('click')
  }
}
// var margin = 200;
let carousel = document.querySelector('.carousel');
Array.from(carousel.children).forEach((item, index) => {
  
  if (index !== 0 || index !== carousel.children.length - 1) {
    item.setAttribute('data-num', index)
  }
  // if (index === 1) {
  //   item.setAttribute('style', 'margin-left:0%')
  //   console.log(item)
  // }
  // if (index !== 1 && index !== 0 && index !== carousel.children.length - 1) {
    
  //   // let str = String(format: "%.2f%%", rate)
  //   item.setAttribute('style', `margin-left:${margin}%`);
  //   margin += 300;
  //   console.log(margin, item)
  // }
  new Carousel(item)
})


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
