import React from 'react';

function CharContainer(props) {
	console.log(props);
	return (
		<section>
			<h3>Characters:</h3>
			<ul>
				{props.char.map((c) => (
					<li key={c.name}>
						<p>Name: {c.name}</p>
						<p>Occupation: {c.occupation}</p>
						<p>{c.image}</p>
					</li>
				))}
			</ul>
		</section>
	);
}

export default CharContainer;
