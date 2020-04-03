import React from 'react';
import Card from './Card';
// import {robots} from './robots';

const Cardlist = ( {robots} ) => {
	const cardarray = robots.map((user) => {
		return (<Card key = {user.id} id= {user.id} name={user.name} email={user.email} />)
	})
	return( 
	<div>
	{cardarray}
	</div>	
)};

export default Cardlist;