import React, { Component } from "react";
import DataFetcher from "./component/DataFetcher";
import PokemonCards from "./component/Cards/PokemonCards";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* render the data fetcher and declare a url prop with the pokemon api, also declare a render prop and and pass a callback*/}
				<DataFetcher
					url="https://api.pokemontcg.io/v1/cards?nationalPokedexNumber=1"
					// the callback passed to the render prop should return the PokemonCards component with the data from the dataFetcher compoenent passed in as a data prop
					render={(data) => {
						// look in the /component/DataFetcher.js, "data" is just this.state.data that was passed into this.props.render()
						return <PokemonCards data={data} />;
					}}
				/>
			</div>
		);
	}
}

export default App;
