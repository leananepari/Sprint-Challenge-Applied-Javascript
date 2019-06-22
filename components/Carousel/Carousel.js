let state = 1;
console.log(state, "STATE")
class Carousel {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', () => this.handleClick(event))
  }
  handleClick() {
    if (this.element.className === 'left-button') {
      this.handleLeft(event);
    } else {
      this.handleRight(event);
    }
  }
  handleLeft() {
    if (state === 1) {
      document.querySelector(`.img[data-num="${state}"]`).classList.remove('selected');
      state = 4;
      document.querySelector(`.img[data-num="${state}"]`).classList.add('selected')
    } else {
      document.querySelector(`.img[data-num="${state}"]`).classList.remove('selected');
      --state;
      document.querySelector(`.img[data-num="${state}"]`).classList.add('selected')
    }
  }
  handleRight(event) {
    event.preventDefault()
    if (state === 4) {
      document.querySelector(`.img[data-num="${state}"]`).classList.remove('selected');
      state = 1;
      document.querySelector(`.img[data-num="${state}"]`).classList.add('selected');
    } else {
      document.querySelector(`.img[data-num="${state}"]`).classList.remove('selected');
      ++state;
      document.querySelector(`.img[data-num="${state}"]`).classList.add('selected');
    }
  }
}

new Carousel(document.querySelector('.left-button'));
new Carousel(document.querySelector('.right-button'));

// console.log(carousel)
// Array.from(carousel.children).forEach(item => {
//   new Carousel(item)
// })


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
