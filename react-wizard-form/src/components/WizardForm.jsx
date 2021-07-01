import React, { useState } from 'react';

function WizardForm(props) {
	// we're destructuring two values out of the array
	// returned by useState()
	// 1st value is always state variable
	// 2nd value is always the setState function (for updating the variable)
	const [name, setName] = useState('');
	const [occupation, setOccupation] = useState('');
	const [house, setHouse] = useState('');

	return (
		<section className="wizard-form" align="center">
			<h1>{props.title}</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const wizardObject = { name, occupation, house };
					props.onSubmit(wizardObject);
					setName('');
					setOccupation('');
					setHouse('');
				}}
			>
				<label>
					<span>Name:</span>
					<input
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
						autoFocus
					/>
				</label>
				<br />
				<label>
					<span>Occupation: </span>
					<input
						value={occupation}
						onChange={(e) => {
							console.log(e.target.value);
							setOccupation(e.target.value);
						}}
					/>
				</label>
				<br />
				<label>
					<span>House: </span>
					<input
						value={house}
						onChange={(e) => {
							console.log(e.target.value);
							setHouse(e.target.value);
						}}
					/>
				</label>
				<br />
				<br />
				<input type="submit" />
			</form>
		</section>
	);
}

export default WizardForm;
