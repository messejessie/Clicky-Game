import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import character from "./character.json";

class App extends Component {
    state = {
        character
    };

    render(){
        return (
            <Wrapper>
                <Title> Clicky Game</Title>
                {this.state.character.map(character => (
                    <CharacterCard
                        image={character.image}
                    />
                ))}
            </Wrapper>
        );
    }

}

export default App;