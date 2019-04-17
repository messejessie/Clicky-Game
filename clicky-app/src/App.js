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
        score: 0,

    }
    
 
    // reset() {
    //     this.setState(characterClicked);
    // };

    clickCharacter  = (id, click) => {
        //clicking on a character 
        const characterClicked = this.state.characterClicked.filter(
            characterClicked => characterClicked.id !== id
        );

        this.setState({ characterClicked });
        console.log(characterClicked + "clicked");
        this.scoreCard(click);
        //shuffle
        this.shuffleCharacters(character)
    };

    scoreCard = click => {
        //let score = 0
        if (this.state.characterClicked.includes(click)) {
            //logic to clear right  now
            this.setState({ score: this.state.score + 1 });
            //alert("Yay you got a point!")


        } else {

            //clearCharacter(characterClicked);
            this.setState({ score: 0 })
            // empty(characterClicked)
            //alert("You lose!")
            this.setState({ characterClicked: character}) 
        }
    };


    shuffleCharacters = (characterClicked) => {
        for (let i = characterClicked.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [characterClicked[i], characterClicked[j]] = [characterClicked[j], characterClicked[i]];
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