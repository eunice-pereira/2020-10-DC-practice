import './App.css'; // like 'require'
import PhotoGallery from './PhotoGallery';

function App() {
	// component!
	// this syntax is JSX
	return (
		<div className="App">
			<header className="App-header">
				<h1>Nacho Libre</h1>
				<PhotoGallery />
			</header>
		</div>
	);
}

export default App; // like 'module.exports'

/*
To use an Emmet shortcut: 
- type what you would in a css file: 
  - example: p.message
  - then press Tab key to expand into: 
  - <p className="message"></p>
*/
