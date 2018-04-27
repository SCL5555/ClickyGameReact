import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Headerbar from "./components/Headerbar";
import Game from "./components/Game";
import Wrapper from "./components/Wrapper";
import heros from "./friends.json";
import './App.css';



class App extends Component {

  state = {
    heros: heros,
    gameNotice: "Click an Image to Begin!",
    bestScore: 0,
    score: 0
  };

  setClick = id => {
    let currentIndex = this.state.heros.findIndex(function(hero){
        return (id === hero.id)
    });

    if(this.state.heros[currentIndex].guessed === "no"){
      let newImageSet = heros.slice(0);
      newImageSet[currentIndex].guessed = "yes";

      if(this.state.score > this.state.bestScore){
        this.setState({
          score: this.state.score +1,
          bestScore: this.state.score +1,
          heros: newImageSet,
          gameNotice: "Correct! Click Another image."
        });
      }
      else{
        this.setState({
          score: this.state.score +1,
          bestScore: this.state.bestScore,
          heros: newImageSet,
          gameNotice: "Correct! Click Another image."
        });
      }


      this.setState({
        heros: heros.sort(function(a, b){return 0.5 - Math.random()})
      });
    } else {
      if(this.state.score > this.state.bestScore){
        this.setState({
          heros: heros,
          bestScore: this.state.score,
          score: 0,
          gameNotice: "Incorrect.  Click another image to start again."
        });
      }
      else{
        this.setState({
          heros: heros,
          bestScore: this.state.bestScore,
          score: 0,
          gameNotice: "Incorrect.  Click another image to start again."
        });
      }
      for(let i = 0; i < heros.length; i++){
        heros[i].guessed = "no";
      }
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <Navbar
            gameNotice= {this.state.gameNotice}
            score= {this.state.score}
            bestScore={this.state.bestScore}
        />
        <Headerbar />
        <Wrapper>
          {this.state.heros.map(hero => (
            <Game
              setClick={this.setClick}
              id={hero.id}
              key={hero.id}
              name={hero.name}
              image={hero.image}
            />
        ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
