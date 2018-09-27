import React, { Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './App.css';


// THINGS I NEED TO DO
// on click, 
// on click, when boolean has changed, do not allow it to toggle bac  
// if the second card has the same value as the first card, do not allow it to toggle back to its original boolean
  // we have a problem: when second card is clicked, it toggles boolean but not class 
// on click,     

const playerArray = [

  {
    img: "assets",
    value: "travis",
    showCard: false,
  },
  {
    img: "assets",
    value: "travis",
    showCard: false,
  },
  {
    img: "assets",
    value: "pillar",
    showCard: false,
  },
  {
    img: "assets",
    value: "pillar",
    showCard: false,
  },
];    

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      players: this.shuffle(playerArray),
      initialCardIndex: null,
      initialCardValue: null,
      currentCardValue: null,
      currentCardIndex: null,
    };

    this.handleClick = this.handleClick.bind(this);
    console.log('initialCardValue starts off as', this.state.initialCardValue);
  }

  handleClick(currentCardIndex){

    const { initialCardIndex } = this.state;
    const { initialCardValue } = this.state;
    // const { currentCardValue } = this.state;
    // const { currentCardIndex } = this.state;
    
    // We are cloning this.state.players because you never mutate state directly 
    // let p = this.state.players.slice();
    // let p = Object.assign([], this.state.players);
    let p = [...this.state.players];

    // this variable allows the ShowCard key to toggle true/false. when card is clicked, the showCard key's boolean will be equal to not itself, ie, toggle.   
    p[currentCardIndex].showCard = !p[currentCardIndex].showCard;

    // when a card gets clicked, let's give that card's value key a name. we'll call it currentCardValue 
    let currentCardValue = p[currentCardIndex].value;

    // if there is a currentCardValue, which is to say, if the currentCardValue is not equal to null - its initial state, then we'll execute the following function. Which is what? What function?   

    // if there is no initialCardValue - ie. if it's null, which it initially is, then set it to the value of the button that has just been clicked. ie Update its state. 
    if (!initialCardValue && !initialCardIndex) {
      this.setState(
        { initialCardValue: currentCardValue, initialCardIndex: currentCardIndex }
      );       
    } 

    console.log('initialCardValue becomes...' ,initialCardValue);
  }

  shuffle(array){
    var currentCardIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentCardIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentCardIndex);
      currentCardIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentCardIndex];
      array[currentCardIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  render() {

    const { initialCardValue } = this.state;

    // deconstructing this.state object, deconstructing means extracting,
    const showCard = this.state.showCard  

    const { players, initialCardIndex } = this.state

    
    const newArray = players.map((playerCard, index) => 
      <button 
        key={index} 
        // i want: the card to toggle between red and blue when clicked. i'm going to: use an inline conditional "?" that will change its class when its boolean is toggled 
        className={playerCard.showCard ? "blueClass" : "redClass"} 
        // this.handleClick method is expecting a parameter, the index of the player array
        onClick={()=> this.handleClick(index)}
      >
        {playerCard.value}
        <br/>
        {index}
      </button>
    ); 
  
    return (
      <div>
        <h1>hello</h1>
        <div className="cardContainer">
          {newArray}
        </div>
      </div>
    )
  }
}

export default App;
