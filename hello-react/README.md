## Hello React

A first step in a long journey into React.

### React Dev Server

- load browser
- watch for changes
- reload your changes (like nodemon)

React App must be interpreted - compiles code and translates to JS

### Components

This is a component.

```sh
function App() {
	// component!
	// this syntax is JSX
	return (
		<div className="App">
			<header className="App-header">
				<h1>Hello, React!</h1>
				<p className="message">nice!</p>
			</header>
		</div>
	);
}
```

- React creates your DOM elements inside `div id="root"`

### Creating a React component

1. Import React

```sh
import React from 'react';
```

2. Export your component

```sh
export default HelloReact;
```

- HelloReact is the name of the component I am about to write (not the name of the file)

3. Write your component

- Steps 1 and 2 are 'creating bookends', then defining component
