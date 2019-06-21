class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = tabElement.dataset.tab; 
    
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    

    this.cards = document.querySelectorAll('.card');
     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map(card => new TabCard(card, this));

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => this.selectTab());
  }

  selectTab(){
    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(tab => tab.classList.remove('active-tab'))

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');
    
    if(this.tabData === 'all'){
      this.tabElement.classList.add('active-tab');
      cards.forEach(card => 
        card.setAttribute('style', 'display:flex')
      )
    } else {

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => card.setAttribute('style', "display:none"))
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add('active-tab');
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard(this.tabData));
  }
}
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard(tab){
    if(this.cardElement.dataset.tab === tab) {
      this.cardElement.setAttribute('style', 'display:flex')
    }
    
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => new TabLink(tab));
