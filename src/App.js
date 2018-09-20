import React, { Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './App.css';


// make each in
// future note: ctrl D to change all names

// current problem, aug 31. i wrote that if the firstclickvalue is equal to the currentclickvalue, then alert "right". but at the outset, they are both equal, ie null.   

// i need... the cpu to hold the value of the first click, then compare it to the second click. how do i make it hold the value of the first click?

// how does the cpu differentiate between the first and second click?
// why is it that... the firstclickvalue is set to null, and yet on click, it says that it is the same as currentclickvalue, which is set to travis. aren't they different? 

// commiting changes to github, jays suck

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
      firstCardIndex: null,
      firstClickValue: null,
      currentClickValue: null,
      currentIndex: null,
      

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(currentIndex){

    const { firstCardIndex } = this.state;
    const { firstClickValue} = this.state;
    const { currentClickValue } = this.state;
    

    // console.log('To start with, the firstCardIndex should be null. It is', firstCardIndex);
    // console.log('To start with, the currentIndex should be null. It is', currentIndex);
    // console.log('To start with, the firstClickValue should be null. It is', firstClickValue);
    // console.log('To start with, the currentClickValue should be null. It is', currentClickValue);
    // // We are cloning this.state.players because you never mutate state directly 
    // let p = this.state.players.slice();
    // let p = Object.assign([], this.state.players);
    let p = [...this.state.players];
    p[currentIndex].showCard = !p[currentIndex].showCard;

    // if firstCardIndex is null, setState firstCardIndex value. Else, compare two arrays.

    let currentValue = p[currentIndex].value;

    // !firstClickValue is the same as firstClickValue === null (and the same goes for firstCardIndex). 
    // if (!firstClickValue && !firstCardIndex)
    if (!firstClickValue && !firstCardIndex) {
      this.setState(
        { firstClickValue: currentValue, firstCardIndex: currentIndex },
        () => console.log("After clicking, the firstClickValue is now...", this.state.firstClickValue
      ));       
    }

    let secondValue = p[currentIndex].value;

    if (firstClickValue !== secondValue){
      console.log('they dont match');
    } else console.log('they do match');


    // if (currentIndex !== firstCardIndex) {
    //   console.log('not equal');
    //   this.setState(
    //     { currentClickValue: currentValue },
    //     () => console.log("It looks like the currentClickValue is now...", this.state.firstClickValue
    //     ));
    // }

    // if firstClickValue is equal to currentClickValue, then console log "hello". Problem: secondClickValue is not defined yet. We need to define it. How do we define it?

    // console.log("Starting to define secondClickValue, I should get either Travis or Pillar", secondClickValue); 
    // Problem: I am getting null. Why? 
  }

  shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  render() {

    const { firstClickValue } = this.state;

    // deconstructing this.state object, deconstructing means extracting,
    // const showCard = this.state.showCard  

    const { players, firstCardIndex, secondClickValue } = this.state

    // console.log('firstCardIndex', firstCardIndex);
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
  
    return (
      <div>
        <h1>hello</h1>
        <div className="cardContainer">
          {newArray}
        </div>
        <div>game time</div>
      </div>
    )
  }
}

export default App;
