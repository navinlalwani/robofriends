import React from 'react';

class Errorboundry extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hasError : false
		}
	}


componentDidCatch (error,info) {
	this.setState({hasError : true})
}

render() {
	if (this.state.hasError) {
		return "Sorry!! we are facing some trouble"
	} else {
		return this.props.children;
	}
}
}

export default Errorboundry;