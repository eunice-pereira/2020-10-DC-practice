import './App.css';
import Header from './components/Header';
import CharContainer from './components/CharContainer';

import { useEffect, useState } from 'react';

function App() {
	const [char, setChars] = useState([]);
	// fn to bring in API characters
	async function getChar() {
		const charPromise = fetch('https://www.breakingbadapi.com/api/characters', {
			headers: {
				Accept: 'application/json',
			},
		});
		const response = await charPromise;
		const charData = await response.json();

		setChars(charData);
	}
	// call getChar() 'on load'
	useEffect(() => {
		getChar();
	}, []);

	// components
	return (
		<div className="App">
			<Header />
			<CharContainer char={char} />
		</div>
	);
}

export default App;
