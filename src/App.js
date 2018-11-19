import React, { Component } from "react";
import DataFetcher from "./component/DataFetcher";
import PokemonCards from "./component/Cards/PokemonCards";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<DataFetcher
					url="https://api.pokemontcg.io/v1/cards"
					render={(data) => {
						console.log(data);
						return <PokemonCards data={data} />;
					}}
				/>
			</div>
		);
	}
}

export default App;
