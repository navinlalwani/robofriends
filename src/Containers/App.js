import React from 'react';
import Cardlist from '../Components/Cardlist';
import {robots} from '../robots';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import Errorboundry from '../Components/Errorboundry';


class App  extends React.Component {
	constructor() {
		super();
		this.state = {
			searchtext : "",
			robots : []
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(resp => resp.json())
		.then(data => this.setState({robots : data}))
	}

	searchpuch = (event) => {
		this.setState({searchtext : event.target.value});
	} 

	render() {
		const filteredrobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchtext.toLowerCase())
		})
		return (
		<div className = 'tc'>
			<h1 className = 'avenir ttu tracked f1 yellow'>Robofriends</h1>
			<Searchbox textentry = {this.searchpuch} />
			<Scroll>
			<Errorboundry>
			<Cardlist robots = {filteredrobots} />
			</Errorboundry>
			</Scroll>
		</div>
		);
	};
}

export default App;