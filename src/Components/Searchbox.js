import React from 'react';

const Searchbox = ({textentry}) => {
	return ( 
		<div >
		<input className = 'pa3 ba b--green bg-lightest-blue' 
		type = "search" 
		placeholder = "search robot"
		onChange = {textentry} 
		/> 
		</div>
		);
};

export default Searchbox;