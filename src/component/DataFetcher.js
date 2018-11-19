import { Component } from "react";
import axios from "axios";

export default class DataFetcher extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
	}

	componentDidMount() {
		this.fetchData();
	}
	//we could use .then() but async is the new kid on the block, this will turn the function asynchrounous so as not to hold up any of your other functions from running;
	async fetchData() {
		// wait for the axios response to come back
		const resource = await axios.get(this.props.url);
		//set state with the response.data
		this.setState({
			data: resource.data
		});
	}

	render() {
		//this is the render method attached to props, name is arbitrary
		return this.props.render(this.state.data);
	}
}
