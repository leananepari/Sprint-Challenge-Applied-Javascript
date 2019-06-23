class Carousel {
  constructor(element) {
    this.element = element;
    this.state = 1;
    this.left = element.querySelector('.left-button');
    this.right = element.querySelector('.right-button');
    this.left.addEventListener('click', () => this.handleLeft(event));
    this.right.addEventListener('click', () => this.handleRight(event));
  }

  handleLeft(event) {
    event.preventDefault();
    if (this.state === 1) {
      this.element.querySelector(`.img[data-num="${this.state}"]`).classList.remove('selected');
      this.state = 4;
      this.element.querySelector(`.img[data-num="${this.state}"]`).classList.add('selected');
    } else {
      this.element.querySelector(`.img[data-num="${this.state}"]`).classList.remove('selected');
      --this.state;
      this.element.querySelector(`.img[data-num="${this.state}"]`).classList.add('selected');
    }
  }
  handleRight(event) {
    event.preventDefault()
    if (this.state === 4) {
      this.element.querySelector(`.img[data-num="${this.state}"]`).classList.remove('selected');
      this.state = 1;
      this.element.querySelector(`.img[data-num="${this.state}"]`).classList.add('selected');
    } else {
      this.element.querySelector(`.img[data-num="${this.state}"]`).classList.remove('selected');
      ++this.state;
      this.element.querySelector(`.img[data-num="${this.state}"]`).classList.add('selected');
    }
  }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
