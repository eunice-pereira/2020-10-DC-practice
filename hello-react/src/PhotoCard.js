import React, { useState } from 'react';

/*
Work from the 'inside-out', and from the smallest to largest.

Do one before you do many. 
*/

function PhotoCard(props) {
	// count is variable , setCount is fn that can set new State
	// useState returns an array.
	// the first item is the current value
	// the second item is a function that can update the value
	const [count, setCount] = useState(0); // starter value
	console.log(props);
	return (
		<div className="card-frame">
			<button
				onClick={(e) => {
					console.log('omg a click!');
					// count += 1;
					setCount(count + 1); //
					console.log(count);
				}}
			>
				like
			</button>

			{count > 0 ? (
				<button
					onClick={(e) => {
						setCount(count > 0 ? count - 1 : 0);
					}}
					className="unlike-button"
				>
					Unlike
				</button>
			) : (
				<button className="unlike-button" disabled>
					Unlike
				</button>
			)}

			{/* <button onClick={(e) => (count > 0 ? setCount(count - 1) : null)}>
				unlike
			</button> */}

			<p>likes: {count}</p>

			{props.title ? <h3>{props.title}</h3> : <h3>untitled</h3>}
			<img src={props.url} alt={props.desc} />

			<p>{props.desc}</p>
		</div>
	);
}

export default PhotoCard;
