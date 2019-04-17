import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import character from "./character.json";
import Instructions from "./components/Instructions"

class App extends Component {
    state = {
        character,
        characterClicked: character,
        score: 0
    };

    clickCharacter = (id, click) => {
        //clicking on a character 
        const characterClicked = this.state.characterClicked.filter(
            characterClicked => characterClicked.id !== id
        );

        this.setState({ characterClicked });
        console.log(characterClicked + "clicked");
        this.scoreCard(click);
        //shuffle
    };

    scoreCard = click => {
        //let score = 0
        if(this.state.characterClicked.includes(click)){
            //logic to clear right  now
                this.setState({score: this.state.score +1 });
                alert("Yay you got a point!")


        }else{
            
            this.setState({ score: 0 })
            alert("You lose!")
        }

    };

    render() {
//console.log(this.state.characterClicked)
console.log(this.state.score);
        return (
            <Wrapper>
                <Title> Clicky Game - Click on an Image to Begin - Score: {this.state.score}</Title>
                <Instructions> Click on an image to earn points, but don't click on any more than once!  </Instructions>
                {this.state.character.map(character => (
                    <CharacterCard
                        image={character.image}
                        clickCharacter={this.clickCharacter}
                        id={character.id}
                        key={character.id}
                        click={character}
                    />
                ))}
            </Wrapper>
        );
    }

}

export default App;