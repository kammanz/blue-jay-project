import React, { Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './App.css';   

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
  {
    img: "assets",
    value: "smoak",
    showCard: false,
  },
  {
    img: "assets",
    value: "smoak",
    showCard: false,
  },
  {
    img: "assets",
    value: "martin",
    showCard: false,
  },
  {
    img: "assets",
    value: "martin",
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
    this.render = this.render.bind(this);
    
  }

  handleClick(currentCardIndex){

    const { initialCardIndex, initialCardValue, currentCardValue, players, playerArray } = this.state;
    
    // cloning this.state.players because we never mutate state directly
    let playersCloned = [...players];
    console.log(playersCloned);
    
    
    // in order to flip the card over, we set the showCard property of the current card to "true".
    playersCloned[currentCardIndex] = {...playersCloned[currentCardIndex], showCard: true };

    this.setState({ players: playersCloned });

    // we need to store the first click's value.
    let latestCardValue = playersCloned[currentCardIndex].value;

    // we need to store the first click's index.
    let latestCardIndex = [currentCardIndex];
  
    // let's update those properties.   
    if ( !initialCardValue && !initialCardIndex ) {
      this.setState(
        { initialCardIndex: latestCardIndex, currentCardIndex: currentCardIndex, currentCardValue: latestCardValue },
      )
    }; 

    // we only want to make a comparison AFTER the second card has been clicked. 
    if ( currentCardIndex !== null && currentCardValue ) {
      
      // if the cards don't match, we need to wait two seconds, then flip both cards back over.  
      if( currentCardValue !== latestCardValue ){
        setTimeout(() => {
          this.setState({ 
            playersCloned: playersCloned[currentCardIndex].showCard = false,   
            playersCloned: playersCloned[initialCardIndex].showCard = false, 
          });}, 2000);      

      // if they match, we keep both cards facing open.     
      } else if ( currentCardValue === latestCardValue ) {
        playersCloned[currentCardIndex] = { ...playersCloned[currentCardIndex], showCard: true }
      };

      // we want to set up the next round of clicks, so we return all properties back to null.  
      this.setState(
        { initialCardIndex: null, currentCardIndex: null, currentCardValue: null }
      )
    }

  };

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


    // deconstructing this.state object, deconstructing means extracting,
    const showCard = this.state.showCard  

    const { players, initialCardIndex } = this.state
    
    const newArray = players.map((playerCard, index) =>
      <button 
        key={index} 
        className={playerCard.showCard ? "blueClass" : "redClass"} 
        // this.handleClick method is expecting a parameter, the index of the player array
        onClick={()=> this.handleClick(index)}
      >
        {playerCard.value}
        <br/>
        {index}
      </button>
    ); 
  console.log("here", newArray);
    console.log("in the render, the initialCardValue is... ", this.state.initialCardValue);
    console.log("in the render, the currentCardValue is...", this.state.currentCardValue);
    console.log("in the render, the initialCardIndex is...", this.state.initialCardIndex);
    console.log("in the render, the currentCardIndex is...", this.state.currentCardIndex);

  
    return (
      <div>
        <h1>hello3</h1>
        <div className="cardContainer">
          {newArray}
        </div>
      </div>
    )
  }
}

export default App;
