import { Component } from "react";
import axios from "axios";

export default class MultiFetcher extends Component {
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

	fetchData() {
		let mappedUrls = this.props.urls.map((url) => {
			return axios.get(url);
		});
		axios.all(mappedUrls).then((response) => {
			console.log(response);
		});
	}

	render() {
		return this.props.render(this.props.data);
	}
}
