import { Component } from "react";
import axios from "axios";

export default class DataFetcher extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
		this.fetchData = this.fetchData.bind(this);
	}

	componentDidMount() {
		this.fetchData();
	}

	async fetchData() {
		const resource = await axios.get(this.props.url);
		this.setState({
			data: resource.data
		});
	}

	render() {
		return this.props.render(this.state.data);
	}
}
